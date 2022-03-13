import { useState } from "react";
import "./App.scss";
import LetterPicker from "./Components/LettersPicker";
import ParametersGrammar from "./Components/ParametersGrammar";
import Params from "./Components/Params";
import data from "./Data/englishList.json";
import createWord from "./Helpers/CreateWords";

const App = () => {
  const [nav, setNav] = useState(0);

  const [words, setWords] = useState([]);
  const [consonants, setConsonants] = useState([]);
  const [vowels, setVowels] = useState([]);
  const [generation, setGeneration] = useState(false);

  const [minLetters, setMinLetters] = useState(2);
  const [maxLetters, setMaxLetters] = useState(10);

  const [consonantCluster, setConsonantCluster] = useState(1);
  const [gemination, setGemination] = useState(false);
  const [consOnly, setConsOnly] = useState(false);

  const [pronouns, setPronouns] = useState([]);
  const [pluralPronoun, setPluralPronoun] = useState("");
  //Randomize the chance of having a consonant cluster
  const lengthCluster = () => {
    let rdm = Math.random();
    if (rdm > 0.78) return true;
    else return false;
  };

  const generateLanguage = () => {
    if (!vowels.length || !consonants.length) return;

    setGeneration(false);
    // Empty state to update it in real time
    setWords([]);
    for (let i = 0; i < 200; i++) {
      setWords((words) => [
        ...words,
        createWord(
          maxLetters,
          minLetters,
          setMaxLetters,
          lengthCluster,
          vowels,
          consonantCluster,
          consonants,
          gemination,
          consOnly
        ),
      ]);
    }
    setGeneration(true);
    generatePronouns();
  };

  const generatePronouns = () => {
    const randomPlural = Math.random();
    // Declaring tmp variables to allow direct creation of array and not after rerendering
    let numPronouns = 6; // Hard coding the value to basic number of pronouns // COULD BE UPDATED
    let tmpMaxLetters = maxLetters;
    let tmpPronouns = [];
    let tmpPluralPronoun = "";
    // Empty state to update them in real time
    setPronouns([]);
    setPluralPronoun("");
    if (randomPlural > 0.35) {
      tmpMaxLetters = Math.round(maxLetters / 2); // Max letter is reduced to avoid long plural forms
      numPronouns = 3;
      tmpPluralPronoun = createWord(
        tmpMaxLetters,
        minLetters,
        setMaxLetters,
        lengthCluster,
        vowels,
        consonantCluster,
        consonants,
        gemination,
        consOnly
      );
    }

    for (let i = 0; i < numPronouns; i++) {
      tmpPronouns.push(
        createWord(
          randomPlural > 0.35 ? tmpMaxLetters : maxLetters, // Get the max number for the plural mark
          minLetters,
          setMaxLetters,
          lengthCluster,
          vowels,
          consonantCluster,
          consonants,
          gemination,
          consOnly
        )
      );
    }
    setPluralPronoun(tmpPluralPronoun);
    setPronouns(tmpPronouns);
    if (randomPlural > 0.35)
      for (let i = 0; i < numPronouns; i++)
        setPronouns((words) => [...words, tmpPronouns[i] + tmpPluralPronoun]);
  };

  const listWords = () => {
    return words.map((x) => (
      <li key={Math.floor(Math.random() * 10000000)}>{x}</li>
    ));
  };

  const listEnglishWords = () => {
    return data.map((x) => <li key={x}>{x}</li>);
  };

  const listPronouns = () => {
    return pronouns.map((x) => (
      <li key={Math.floor(Math.random() * 10000000)}>{x}</li>
    ));
  };

  const renderLexicon = () => {
    if (nav === 0)
      return (
        <div className="lexicon">
          <LetterPicker
            setConsonants={setConsonants}
            consonants={consonants}
            vowels={vowels}
            setVowels={setVowels}></LetterPicker>
          <Params
            minLetters={minLetters}
            maxLetters={maxLetters}
            setMinLetters={setMinLetters}
            setMaxLetters={setMaxLetters}
            consonantCluster={consonantCluster}
            setConsonantCluster={setConsonantCluster}
            setGemination={setGemination}
            setConsOnly={setConsOnly}></Params>
          <ParametersGrammar></ParametersGrammar>
          <button onClick={() => generateLanguage()} className="btn">
            Generate language
          </button>
          <ul>{generation ? listPronouns() : <div></div>}</ul>
          <div className="list-display">
            <ol className="list-english">
              {generation ? listEnglishWords() : <div></div>}
            </ol>
            <ul className="list-words">{generation ? listWords() : null}</ul>
          </div>
        </div>
      );
    return null;
  };

  const renderGrammar = () => {
    if (nav === 1) return <div>Hello</div>;
  };

  return (
    <div className="App">
      <nav>
        <button className="btn" onClick={() => setNav(0)}>
          Parameters
        </button>
        <button className="btn" onClick={() => setNav(1)}>
          Grammar
        </button>
        <button className="btn" onClick={() => setNav(2)}>
          Sounds
        </button>
        <button className="btn" onClick={() => setNav(3)}>
          Lexicon
        </button>
      </nav>
      {renderLexicon()}
      {renderGrammar()}
    </div>
  );
};

export default App;
