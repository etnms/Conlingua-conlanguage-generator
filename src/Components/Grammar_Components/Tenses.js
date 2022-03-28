import { useContext } from "react";
import ContextGrammar from "../../ContextGrammar";

const Tenses = () => {
  const contextGrammar = useContext(ContextGrammar);

  const { morphologyType, pronouns, presentMorpheme, pastMorpheme, futurMorpheme, words, wordOrder } =
    contextGrammar;

  const conjugateVerb = (pronouns, morphologyType, wordOrder, word, tenseMorpheme) => {
    let rdn = Math.random();

    switch (morphologyType) {
      case "fusional":
        if (wordOrder === "VSO" || wordOrder === "VOS" || wordOrder === "OVS")
          return `${word}${tenseMorpheme} ${pronouns}`;
        else return `${pronouns} ${word}${tenseMorpheme}`;
      case "agglutinative":
        if (rdn > 0.9) return `${pronouns}${word}${tenseMorpheme}`;
        else return `${word}${tenseMorpheme}${pronouns}`;
      case "isolating":
        if (wordOrder === "VSO" || wordOrder === "VOS" || wordOrder === "OVS")
          return `${word} ${tenseMorpheme} ${pronouns}`;
        else return `${pronouns} ${word} ${tenseMorpheme}`;
      default:
        return "";
    }
  };

  const createTenseTable = (titleTable, morphologyType, wordOrder, pronouns, word, tenseMorpheme) => {
    return (
      <table className="table-alignment-verb">
        <caption className="table-alignment-verb-caption">{titleTable}</caption>
        <tbody>
          <tr>
            <td className="cell-alignment-verb">1SG</td>
            <td className="cell-alignment-verb">
              {conjugateVerb(pronouns[0], morphologyType, wordOrder, word, tenseMorpheme)}
            </td>
          </tr>
          <tr>
            <td className="cell-alignment-verb">2SG</td>
            <td className="cell-alignment-verb">
              {conjugateVerb(pronouns[1], morphologyType, wordOrder, word, tenseMorpheme)}
            </td>
          </tr>
          <tr>
            <td className="cell-alignment-verb">3SG</td>
            <td className="cell-alignment-verb">
              {conjugateVerb(pronouns[2], morphologyType, wordOrder, word, tenseMorpheme)}
            </td>
          </tr>
          <tr>
            <td className="cell-alignment-verb">1PL</td>
            <td className="cell-alignment-verb">
              {conjugateVerb(pronouns[3], morphologyType, wordOrder, word, tenseMorpheme)}
            </td>
          </tr>
          <tr>
            <td className="cell-alignment-verb">2PL</td>
            <td className="cell-alignment-verb">
              {conjugateVerb(pronouns[4], morphologyType, wordOrder, word, tenseMorpheme)}
            </td>
          </tr>
          <tr>
            <td className="cell-alignment-verb">3PL</td>
            <td className="cell-alignment-verb">
              {conjugateVerb(pronouns[5], morphologyType, wordOrder, word, tenseMorpheme)}
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  return (
    <section className="section-grammar">
      <h2 className="section-title"> Verbs</h2>
      <h3 className="section-subtitle">
        <strong>Legend:</strong>
      </h3>
      <div className="wrapper-verb">
        <p>
          <strong>{words[187]}</strong>: to run
        </p>
        <p>
          {morphologyType === "isolating"
            ? `Present marker: ${presentMorpheme}`
            : `Present morpheme: ${presentMorpheme}`}
        </p>
        <p>
          {morphologyType === "isolating" ? `Past marker: ${pastMorpheme}` : `Past morpheme: ${pastMorpheme}`}
        </p>
        <p>
          {morphologyType === "isolating"
            ? `Future marker: ${futurMorpheme}`
            : `Future morpheme: ${futurMorpheme}`}
        </p>
      </div>
      <div className="wrapper-table-verbs">
        {createTenseTable("Present tense", morphologyType, wordOrder, pronouns, words[187], presentMorpheme)}
        {createTenseTable("Past tense", morphologyType, wordOrder, pronouns, words[187], pastMorpheme)}
        {createTenseTable("Future tense", morphologyType, wordOrder, pronouns, words[187], futurMorpheme)}
      </div>
    </section>
  );
};

export default Tenses;
