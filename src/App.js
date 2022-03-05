import { useState, useEffect } from "react";
import "./App.css";
import LetterPicker from "./Components/LettersPicker";
import Params from "./Components/Params";
import data from "./data/englishList.json";

const App = () => {
  const [nav, setNav] = useState(0);

  const [words, setWords] = useState([]);
  const [consonants, setConsonants] = useState([]);
  const [vowels, setVowels] = useState([]);
  const [generation, setGeneration] = useState(false);

  const [consonantCluster, setConsonantCluster] = useState(1);


  useEffect(() => {
  }, []);

  const wordGenerator = () => {
    setGeneration(false);
    setWords([]);
    for (let i = 0; i < 200; i++) {
      setWords((words) => [...words, createWord()]);
    }
    setGeneration(true);
  };

  const createWord = () => {
    let rdmLength = Math.floor(Math.random() * 10) + 1;
    let randomWord = "";

    let consonantClusterSize = Math.floor(Math.random() * consonantCluster) +1;

    for (let i = 0; i < rdmLength; i++) {      
      if (i % 2 === 0) {
        let rdmVowels = Math.floor(Math.random() * vowels.length);   
        randomWord += vowels[rdmVowels];
      }
      else {
        for (let j = 0; j < consonantClusterSize; j++)
        {
          let rdmConsonants = Math.floor(Math.random() * consonants.length);
          randomWord += consonants[rdmConsonants];
        }
         
      }
    }
    return randomWord;
  };

  const listWords = () => {
    return words.map((x) => (
      <li key={Math.floor(Math.random() * 10000000)}>{x}</li>
    ));
  };

  const listEnglishWords = () => {
    return data.map((x) => <li key={x}>{x}</li>);
  };

  return (
    <div className="App">
      <LetterPicker
        setConsonants={setConsonants}
        consonants={consonants}
        vowels={vowels}
        setVowels={setVowels}></LetterPicker>
      <Params setConsonantCluster = {setConsonantCluster}></Params>
      <button onClick={() => wordGenerator()} className="btn">
        Generate words
      </button>
      <div className="list-display">
        <ol className="list-english">
          {generation ? listEnglishWords() : <div></div>}
        </ol>
        <ul className="list-words">{generation ? listWords() : <div></div>}</ul>
      </div>
    </div>
  );
};

export default App;
