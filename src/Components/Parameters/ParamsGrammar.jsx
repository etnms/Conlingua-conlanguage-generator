import { useEffect } from "react";
import "./Morphology.scss";
import "./Select.scss";

const ParamsGrammar = (props) => {
  const { alignment, setAlignment, morphologyType, setMorphologyType, wordOrder, setWordOrder } = props;

  useEffect(() => {
    document.querySelector("#word-order").value = wordOrder;
    document.querySelector("#type-morphology").value = morphologyType;
    document.querySelector("#alignment").value = alignment;
  })
  return (
    <div className="parameters-morphology">
      <div className="wrapper-morpho">
        <label htmlFor="type-morphology">Morphology:</label>
        <select id="type-morphology" className="select-dropdown" onChange={(e) => setMorphologyType(e.target.value)}>
          <option value={"agglutinative"} className="select-dropdown-option">Agglutinative</option>
          <option value={"fusional"} className="select-dropdown-option">Fusional</option>
          <option value={"isolating"} className="select-dropdown-option">Isolating</option>
        </select>
      </div>
      <div className="wrapper-morpho">
        <label htmlFor="word-order">Word order:</label>
        <select id="word-order" className="select-dropdown" onChange={(e) => setWordOrder(e.target.value)}>
          <option value={"SOV"} className="select-dropdown-option">SOV</option>
          <option value={"SVO"} className="select-dropdown-option">SVO</option>
          <option value={"VSO"} className="select-dropdown-option">VSO</option>
          <option value={"VOS"} className="select-dropdown-option">VOS</option>
          <option value={"OVS"} className="select-dropdown-option">OVS</option>
          <option value={"OSV"} className="select-dropdown-option">OSV</option>        
        </select>
      </div>

      <div className="wrapper-morpho">
        <label htmlFor="alignment">Morphosyntactic alignment:</label>
        <select id="alignment" className="select-dropdown" onChange={(e) => setAlignment(e.target.value)}>
          <option value={"nom-acc"} className="select-dropdown-option">Nominative-accusative</option>
          <option value={"erg-abs"} className="select-dropdown-option">Ergative-absolutive</option>
          <option value={"tripartite"} className="select-dropdown-option">Tripartite</option>
        </select>
      </div>

    </div>
  );
};

export default ParamsGrammar;
