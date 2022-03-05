import { useState } from "react";
import vowels from "../data/vowels.json";
import consonants from "../data/consonants.json";

const LetterPicker = (props) => {
  const { setConsonants, setVowels } = props;
  const [showIPAVowels, setShowIPAVowels] = useState(false);
  const [showIPAConsonants, setShowIPAConsonants] = useState(false);

  const soundList = (input) => {
    let cons = document.querySelector("#consonants-input").value;
    let vows = document.querySelector("#vowels-input").value;
    let regex = /^[0-9!@#$%"'<>,[\]^&*)(+=._-]+$/g;
    for (let i = 0; i < vows.length; i++) {
      if (!vows[i].match(regex)) if (input === "vowels") setVowels(vows);
    }
    for (let i = 0; i < cons.length; i++)
      if (!cons[i].match(regex)) {
        if (input === "consonants") setConsonants(cons);
      }
  };

  const writeLetter = (e, letter) => {
    if (letter === "vowel") {
      document.querySelector("#vowels-input").value += e.target.value;
    }
    if (letter === "consonant")
      document.querySelector("#consonants-input").value += e.target.value;
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
      Consonants
      <input type="text" name="consonants-input" id="consonants-input"></input>
      <button onClick={() => soundList("consonants")} className="btn">
        Generate consonants
      </button>
      <button className="btn" onClick={() => setShowIPAConsonants(!showIPAConsonants)}>
        Show IPA for consonants
      </button>
      {showIPAConsonants ? (
        <div className="wrapper-ipa">{createBtns("consonant")}</div>
      ) : (
        <div></div>
      )}
      Vowels
      <input type="text" name="consonants-input" id="vowels-input"></input>
      <button onClick={() => soundList("vowels")} className="btn">
        Generate vowels
      </button>
      <button className="btn" onClick={() => setShowIPAVowels(!showIPAVowels)}>
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
