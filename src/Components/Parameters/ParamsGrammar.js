import "./Morphology.scss";
import "./Select.scss"
const ParamsGrammar = (props) => {
  const { setAlignment, setMorphologyType, setWordOrder } = props;

  return (
    <div className="parameters-morphology">
      <div className="wrapper-morpho">
        <label htmlFor="type-morphology">Morphology:</label>
        <select id="type-morphology" className="select-dropdown" onChange={(e) => setMorphologyType(e.target.value)}>
          <option value={"agglutinative"}>Agglutinative</option>
          <option value={"fusional"}>Fusional</option>
          <option value={"isolating"}>Isolating</option>
          <option value={"polysynthetic"}>Polysynthetic</option>
        </select>
      </div>
      <div className="wrapper-morpho">
        <label htmlFor="word-order">Word order:</label>
        <select id="word-order" className="select-dropdown" onChange={(e) => setWordOrder(e.target.value)}>
          <option value={"SOV"}>SOV</option>
          <option value={"SVO"}>SVO</option>
          <option value={"VSO"}>VSO</option>
          <option value={"VOS"}>VOS</option>
          <option value={"OVS"}>OVS</option>
          <option value={"OSV"}>OSV</option>        
        </select>
      </div>

      <div className="wrapper-morpho">
        <label htmlFor="alignment">Morphosyntactic alignment:</label>
        <select id="alignment"  className="select-dropdown" onChange={(e) => setAlignment(e.target.value)}>
          <option value={"nom-acc"}>Nominative-accusative</option>
          <option value={"erg-abs"}>Ergative-absolutive</option>
          <option value={"tripartite"}>Tripartite</option>
          <option value={"direct"}>Direct</option>
          <option value={"active-stative"}>Active-stative</option>
        </select>
      </div>
      <div className="grammatical-gender">
        <p>Grammatical gender: Select number</p>
      </div>
    </div>
  );
};

export default ParamsGrammar;
