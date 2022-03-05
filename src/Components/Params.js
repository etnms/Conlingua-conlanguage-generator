const Params = (props) => {

    const {setConsonantCluster} = props;

    const handleChange = (event) => {
        setConsonantCluster(event.target.value)
    }

  return (
    <div className="cc-select-wrappeer">
        <label>Max number of consonants per consonant clusters: </label>
      <select onChange={(event) => handleChange(event)}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
    </div>
  );
};

export default Params;
