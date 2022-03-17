import { useState } from "react";
import "./App.scss";
import "./Components/Scrollbar.scss";
import LetterPicker from "./Components/Parameters/LetterPicker";
import ParamsGrammar from "./Components/Parameters/ParamsGrammar";
import Params from "./Components/Parameters/Params";
import data from "./Data/englishList.json";
import createWord from "./Helpers/CreateWords";
import Sounds from "./Components/Views/Sounds";
import Lexicon from "./Components/Views/Lexicon";
import Grammar from "./Components/Views/Grammar";

const App = () => {
  const [nav, setNav] = useState(0);

  const [words, setWords] = useState([]);
  const [languageName, setLanguageName] = useState("");
  const [consonants, setConsonants] = useState([]); // Strings for lists of sounds (can be sanitized)
  const [vowels, setVowels] = useState([]);
  const [generation, setGeneration] = useState(false);

  const [minLetters, setMinLetters] = useState(2);
  const [maxLetters, setMaxLetters] = useState(10);

  const [consonantCluster, setConsonantCluster] = useState(1);
  const [gemination, setGemination] = useState(false);
  const [consOnly, setConsOnly] = useState(false);

  const [alignment, setAlignment] = useState("");
  const [morphologyType, setMorphologyType] = useState("fusional");
  const [wordOrder, setWordOrder] = useState("SOV"); // Default to SOV because most common one

  const [plural, setPlural] = useState("");
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
    //Generate name for language and capitalize the first letter
    let tmpName = createWord(
      maxLetters,
      minLetters,
      setMaxLetters,
      lengthCluster,
      vowels,
      consonantCluster,
      consonants,
      gemination,
      consOnly
    );
    setLanguageName(capitalizeFirstLetter(tmpName));

    //Generation of the grammar aspects
    generatePronouns();
    generatePlural();
    setGeneration(true);
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const generatePlural = () => {
    morphologyType === "isolating"
      ? setPlural("")
      : setPlural(
          createWord(
            Math.round(maxLetters / 2), //divide by 2 to get smaller morphemes
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

  const renderParameters = () => {
    if (nav === 0)
      return (
        <div className="center-no-height">
          <LetterPicker
            consonantList={consonants}
            setConsonants={setConsonants}
            vowelList={vowels}
            setVowels={setVowels}></LetterPicker>
          <Params
            minLetters={minLetters}
            maxLetters={maxLetters}
            setMinLetters={setMinLetters}
            setMaxLetters={setMaxLetters}
            consonantCluster={consonantCluster}
            setConsonantCluster={setConsonantCluster}
            gemination={gemination}
            setGemination={setGemination}
            consOnly={consOnly}
            setConsOnly={setConsOnly}></Params>
          <ParamsGrammar
            wordOrder={wordOrder}
            setAlignment={setAlignment}
            setMorphologyType={setMorphologyType}
            setWordOrder={setWordOrder}></ParamsGrammar>
          <button
            onClick={() => generateLanguage()}
            className="btn btn-generate btn-fill">
            Generate language
          </button>
          {generation ? <h2>Language name: {languageName}</h2> : <span></span>}
          {generation? <div className="list-display">
            <ol className="list-numbered">
              {listEnglishWords()}
            </ol>
            <ul className="list-default">{listWords()}</ul>
          </div> : null}
        </div>
      );
    return null;
  };

  const renderGrammar = () => {
    if (nav === 1)
      return (
        <Grammar
          generation={generation}
          morphologyType={morphologyType}
          plural={plural}
          pronouns={pronouns}
          words={words}
          wordOrder={wordOrder}></Grammar>
      );
  };

  const renderSounds = () => {
    if (nav === 2)
      return (
        <Sounds
          consonants={consonants}
          vowels={vowels}
          generation={generation}
          languageName={languageName}></Sounds>
      );
  };

  const renderLexicon = () => {
    if (nav === 3)
      return <Lexicon words={words} generation={generation}></Lexicon>;
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
      {renderParameters()}
      {renderGrammar()}
      {renderSounds()}
      {renderLexicon()}
    </div>
  );
};

export default App;
