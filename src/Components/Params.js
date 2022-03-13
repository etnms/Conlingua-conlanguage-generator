const Params = (props) => {
  const {
    consonantCluster,
    setConsonantCluster,
    setConsOnly,
    setGemination,
    minLetters,
    setMinLetters,
    maxLetters,
    setMaxLetters,
  } = props;

  return (
    <div className="parameters-phonology">
      <div className="wrapper-range">
        <label>Minimum number of sounds per word: </label>
        <input
          type="range"
          min="1"
          max="5"
          defaultValue="2"
          className="range-slider"
          onChange={(e) => setMinLetters(parseInt(e.target.value))}></input>
        <span>{minLetters}</span>
      </div>
      <div className="wrapper-range">
        <label>Maximum number of sounds per word: </label>
        <input
          type="range"
          min="2"
          max="15"
          defaultValue="10"
          className="range-slider"
          onChange={(e) => setMaxLetters(parseInt(e.target.value))}></input>
        <span>{maxLetters}</span>
      </div>
      <div className="wrapper-range">
        <label>Maximum number of consonants per consonant clusters: </label>
        <input
          type="range"
          min="1"
          max="5"
          defaultValue="1"
          className="range-slider"
          onChange={(e) =>
            setConsonantCluster(parseInt(e.target.value))
          }></input>
        <span>{consonantCluster}</span>
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
