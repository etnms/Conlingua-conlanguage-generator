import { useEffect } from "react";
import "./Params.scss";
import "./CheckboxSlider.scss";
import "./RangeSlider.scss";
const Params = (props) => {
  const {
    consonantCluster,
    setConsonantCluster,
    consOnly,
    setConsOnly,
    gemination,
    setGemination,
    minSyllables,
    setMinSyllables,
    maxSyllables,
    setMaxSyllables,
    setStressPattern,
  } = props;

  useEffect(() => {
    document.querySelector("#range-min-letters").value = minSyllables;
    document.querySelector("#range-max-letters").value = maxSyllables;
    document.querySelector("#range-cc").value = consonantCluster;
    document.querySelector("#gemination-checkbox").checked = gemination;
    document.querySelector("#consonly-checkbox").checked = consOnly;
  });

  return (
    <div className="parameters-phonology">
      <div className="wrapper-range">
        <label>Minimum number of syllables per word: </label>
        <input
          type="range"
          min="1"
          max="5"
          defaultValue="2"
          className="range-slider"
          id="range-min-letters"
          onChange={(e) => setMinSyllables(parseInt(e.target.value))}></input>
        <span>{minSyllables}</span>
      </div>
      <div className="wrapper-range">
        <label>Maximum number of syllables per word: </label>
        <input
          type="range"
          min="2"
          max="10"
          defaultValue="4"
          className="range-slider"
          id="range-max-letters"
          onChange={(e) => setMaxSyllables(parseInt(e.target.value))}></input>
        <span>{maxSyllables}</span>
      </div>
      <div className="wrapper-range">
        <label>Maximum number of consonants per consonant clusters: </label>
        <input
          type="range"
          min="1"
          max="5"
          defaultValue="1"
          className="range-slider"
          id="range-cc"
          onChange={(e) => setConsonantCluster(parseInt(e.target.value))}></input>
        <span>{consonantCluster}</span>
      </div>
      <div className="wrapper-param">
        <span>Stress position in the word: </span>
        <select onChange={(e) => setStressPattern(e.target.value)} className="select-dropdown">
          <option value={"first-syl"}>First syllable</option>
          <option value={"second-syl"}>Second syllable</option>
          <option value={"penul-syl"}>Penultimate</option>
          <option value={"last-syl"}>Last syllable</option>
        </select>
      </div>
      <div className="wrapper-param">
        <span>Gemination: </span>
        <label className="switch">
          <input
            type="checkbox"
            id="gemination-checkbox"
            onChange={(e) => setGemination(e.target.checked)}></input>
          <span className="slider round"></span>
        </label>
      </div>
      <div className="wrapper-param">
        <span>Consonant only words: </span>
        <label className="switch">
          <input
            type="checkbox"
            id="consonly-checkbox"
            onChange={(e) => setConsOnly(e.target.checked)}></input>
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default Params;
