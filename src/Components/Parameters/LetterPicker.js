import { useEffect, useState } from "react";
import vowels from "../../Data/vowels.json";
import consonants from "../../Data/consonants.json";

const LetterPicker = (props) => {
  const { consonantList, setConsonants, vowelList, setVowels } = props;
  const [showIPAVowels, setShowIPAVowels] = useState(false);
  const [showIPAConsonants, setShowIPAConsonants] = useState(false);

  // useEffect is used to get the values back in the field after navigation to other tabs
  useEffect(() => {
    for (let i = 0; i < vowelList.length; i++) {
      document.querySelector("#vowels-input").value += vowelList[i];
    }
    for (let i = 0; i < consonantList.length; i++) {
      document.querySelector("#consonants-input").value += consonantList[i];
    }
  }, []);

  const handleChange = (e, setListSound) => {
    let regex = /^[0-9!@#$%"'<>,[\]^&*)(+=._-]+$/g;
    let tmpList = [];

    for (let i = 0; i < e.target.value.length; i++) {
       // Avoid having same value twice
      if (!tmpList.includes(e.target.value[i]))
        if (!e.target.value[i].match(regex))
          tmpList.push(e.target.value[i]);
    }
    setListSound(tmpList);
  };

  const writeLetter = (e, setListSound, list, stringInput) => {
     // Avoid having same value twice
    if (!list.includes(e.target.value)) 
      setListSound((vowels) => [...vowels, e.target.value]);
    document.querySelector(`#${stringInput}`).value += e.target.value;
  };

  const createBtns = (input) => {
    if (input === "vowel")
      return vowels.map((x) => {
        return (
          <button
            key={x}
            value={x}
            className="btn-letter"
            onClick={(e) =>
              writeLetter(e, setVowels, vowelList, "vowels-input")
            }>
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
            onClick={(e) =>
              writeLetter(e, setConsonants, consonantList, "consonants-input")
            }>
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
          onChange={(e) => handleChange(e, setConsonants)}></input>
      </fieldset>
      <button
        className="btn btn-secondary"
        onClick={() => setShowIPAConsonants(!showIPAConsonants)}>
        Show IPA for consonants
      </button>
      {showIPAConsonants ? (
        <div className="wrapper-ipa">{createBtns("consonant")}</div>
      ) : null}
      <fieldset>
        <label htmlFor="vowels-input" className="label-letters">
          Vowels
        </label>
        <input
          type="text"
          name="vowels-input"
          id="vowels-input"
          onChange={(e) => handleChange(e, setVowels)}></input>
      </fieldset>
      <button
        className="btn btn-secondary"
        onClick={() => setShowIPAVowels(!showIPAVowels)}>
        Show IPA for vowels
      </button>
      {showIPAVowels ? (
        <div className="wrapper-ipa">{createBtns("vowel")}</div>
      ) : null}
    </div>
  );
};

export default LetterPicker;
