import { useState } from "react";
import vowels from "../Data/vowels.json";
import consonants from "../Data/consonants.json";

const LetterPicker = (props) => {
  const { setConsonants, setVowels } = props;
  const [showIPAVowels, setShowIPAVowels] = useState(false);
  const [showIPAConsonants, setShowIPAConsonants] = useState(false);

  const handleChange = (e, type) => {
    let regex = /^[0-9!@#$%"'<>,[\]^&*)(+=._-]+$/g;
    if (type === "consonant") {
      let listCons = "";
      for (let i = 0; i < e.target.value.length; i++) {
        if (!e.target.value[i].match(regex)) listCons += e.target.value[i];
      }
      setConsonants(listCons);
    }
    if (type === "vowel") {
      let listVows = "";
      for (let i = 0; i < e.target.value.length; i++) {
        if (!e.target.value[i].match(regex)) listVows += e.target.value[i];
      }
      setVowels(listVows);
    }
  };

  const writeLetter = (e, letter) => {
    if (letter === "vowel") {
      setVowels((vowels) => [...vowels, e.target.value]);
      document.querySelector("#vowels-input").value += e.target.value;
    }
    if (letter === "consonant") {
      setConsonants((consonant) => [...consonant, e.target.value]);
      document.querySelector("#consonants-input").value += e.target.value;
    }
  };

  const createBtns = (input) => {
    if (input === "vowel")
      return vowels.map((x) => {
        return (
          <button
            key={x}
            value={x}
            className="btn-letter"
            onClick={(e) => writeLetter(e, "vowel")}>
            {x}
          </button>
        );
      });
    else
      return consonants.map((x) => {
        return (
          <button
            key={x}
            value={x}
            className="btn-letter"
            onClick={(e) => writeLetter(e, "consonant")}>
            {x}
          </button>
        );
      });
  };

  return (
    <div className="input-letters">
      <fieldset>
        <label htmlFor="vowels-input" className="label-letters">
          Consonants
        </label>
        <input
          type="text"
          name="consonants-input"
          id="consonants-input"
          onChange={(e) => handleChange(e, "consonant")}></input>
      </fieldset>
      <button
        className="btn btn-secondary"
        onClick={() => setShowIPAConsonants(!showIPAConsonants)}>
        Show IPA for consonants
      </button>
      {showIPAConsonants ? (
        <div className="wrapper-ipa">{createBtns("consonant")}</div>
      ) : (
        <div></div>
      )}
      <fieldset>
        <label htmlFor="vowels-input" className="label-letters">
          Vowels
        </label>
        <input
          type="text"
          name="vowels-input"
          id="vowels-input"
          onChange={(e) => handleChange(e, "vowel")}></input>
      </fieldset>
      <button
        className="btn btn-secondary"
        onClick={() => setShowIPAVowels(!showIPAVowels)}>
        Show IPA for vowels
      </button>
      {showIPAVowels ? (
        <div className="wrapper-ipa">{createBtns("vowel")}</div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default LetterPicker;
