import "./AlignmentTenses.scss";
import sortWordOrder from "../../Helpers/SortWordOrder";
import { useContext } from "react";
import ContextGrammar from "../../ContextGrammar";
import removeStressExamples from "../../Helpers/RemoveStressGrammar";

const Alignment = () => {
  const contextGrammar = useContext(ContextGrammar);
  const alignment = contextGrammar.alignment;
  const tripartiteMorpheme = contextGrammar.tripartiteMorpheme;
  const words = contextGrammar.words;
  const presentMorpheme = contextGrammar.presentMorpheme;
  const pronouns = contextGrammar.pronouns;
  const alignmentSubject = contextGrammar.alignmentSubject;
  const alignmentObject = contextGrammar.alignmentObject;
  const wordOrder = contextGrammar.wordOrder;

  const createAlignment = (word, presentMorpheme, alignmentSubject, alignmentObject, semanticRole) => {
    //Making sure there is no undefined
    if (alignmentSubject === undefined) alignmentSubject = "";
    if (alignmentObject === undefined) alignmentObject = "";
    let wordAlign;

    // Switch statement to check the alignment and creating the corresponding values
    switch (alignment) {
      case "nom-acc":
        if (semanticRole === "A" || semanticRole === "S")
          wordAlign = word + presentMorpheme + alignmentSubject;
        if (semanticRole === "O") wordAlign = word + alignmentObject;
        break;
      case "erg-abs":
        if (semanticRole === "O") wordAlign = word + alignmentObject;
        if (semanticRole === "S") wordAlign = word + presentMorpheme + alignmentObject;
        if (semanticRole === "A") wordAlign = word + presentMorpheme + alignmentSubject;
        break;
      case "tripartite":
        if (semanticRole === "O") wordAlign = word + alignmentSubject + alignmentObject;
        if (semanticRole === "S") wordAlign = word + presentMorpheme + tripartiteMorpheme;
        if (semanticRole === "A") wordAlign = word + presentMorpheme + alignmentSubject;
        break;
      default:
        wordAlign = "";
        break;
    }
    return wordAlign;
  };

  const transitiveVerbExample = removeStressExamples(words[107]);
  const intransitiveVerbExample = removeStressExamples(words[597]);

  const exampleAlignMorpheme = (alignment, semanticRole) => {
    switch (alignment) {
      case "nom-acc":
        if (semanticRole === "S") return alignmentSubject;
        if (semanticRole === "A") return alignmentSubject;
        if (semanticRole === "O") return alignmentObject;
        break;
      case "erg-abs":
        if (semanticRole === "S") return alignmentObject;
        if (semanticRole === "A") return alignmentSubject;
        if (semanticRole === "O") return alignmentObject;
        break;
      case "tripartite":
        if (semanticRole === "S") return tripartiteMorpheme;
        if (semanticRole === "A") return alignmentSubject;
        if (semanticRole === "O") return alignmentObject;
        break;
      default:
        return;
    }
  };

  return (
    <section className="section-grammar">
      <h2 className="section-title">Morphosyntactic alignment</h2>
      <div className="section-legend">
        <h3 className="section-subtitle">Legend:</h3>
        <p className="section-example">
          I help you:{" "}
          {sortWordOrder(
            pronouns[0],
            createAlignment(transitiveVerbExample, presentMorpheme, alignmentSubject, alignmentObject, "A"),
            createAlignment(pronouns[1], presentMorpheme, alignmentSubject, alignmentObject, "O"),
            wordOrder
          )}
        </p>
        <p className="section-example">I: {pronouns[0]}</p>
        <p className="section-example">Help: {transitiveVerbExample}</p>
        <p className="section-example">You: {pronouns[1]}</p>
        <p className="section-example">
          I run:{" "}
          {sortWordOrder(
            pronouns[0],
            createAlignment(intransitiveVerbExample, presentMorpheme, alignmentSubject, alignmentObject, "S"),
            "",
            wordOrder
          )}
        </p>
        <p className="section-example">
          Subject of transitive verb is marked by: <strong>{exampleAlignMorpheme(alignment, "A")}</strong>
        </p>
        <p className="section-example">
          Subject of intransitive verb is marked by: <strong>{exampleAlignMorpheme(alignment, "S")}</strong>
        </p>
        <p className="section-example">
          Object is marked by: <strong>{exampleAlignMorpheme(alignment, "O")}</strong>
        </p>
      </div>

      <table className="table-alignment-verb">
        <caption className="title-table">Transitive verbs</caption>
        <tbody>
          <tr>
            <td className="cell-alignment-verb cell-forbidden"></td>
            <td className="cell-alignment-verb">1SG</td>
            <td className="cell-alignment-verb">2SG</td>
            <td className="cell-alignment-verb">3SG</td>
            <td className="cell-alignment-verb">1PL</td>
            <td className="cell-alignment-verb">2PL</td>
            <td className="cell-alignment-verb">3PL</td>
          </tr>
          <tr>
            <td className="cell-alignment-verb">1SG</td>
            <td className="cell-alignment-verb cell-forbidden"></td>
            <td className="cell-alignment-verb">
              {sortWordOrder(
                pronouns[0],
                createAlignment(
                  transitiveVerbExample,
                  presentMorpheme,
                  alignmentSubject,
                  alignmentObject,
                  "A"
                ),
                createAlignment(pronouns[1], presentMorpheme, alignmentSubject, alignmentObject, "O"),
                wordOrder
              )}
            </td>
            <td className="cell-alignment-verb">
              {sortWordOrder(
                pronouns[0],
                createAlignment(
                  transitiveVerbExample,
                  presentMorpheme,
                  alignmentSubject,
                  alignmentObject,
                  "A"
                ),
                createAlignment(pronouns[2], presentMorpheme, alignmentSubject, alignmentObject, "O"),
                wordOrder
              )}
            </td>
            <td className="cell-alignment-verb">
              {sortWordOrder(
                pronouns[0],
                createAlignment(
                  transitiveVerbExample,
                  presentMorpheme,
                  alignmentSubject,
                  alignmentObject,
                  "A"
                ),
                createAlignment(pronouns[3], presentMorpheme, alignmentSubject, alignmentObject, "O"),
                wordOrder
              )}
            </td>
            <td className="cell-alignment-verb">
              {sortWordOrder(
                pronouns[0],
                createAlignment(
                  transitiveVerbExample,
                  presentMorpheme,
                  alignmentSubject,
                  alignmentObject,
                  "A"
                ),
                createAlignment(pronouns[4], presentMorpheme, alignmentSubject, alignmentObject, "O"),
                wordOrder
              )}
            </td>
            <td className="cell-alignment-verb">
              {sortWordOrder(
                pronouns[0],
                createAlignment(
                  transitiveVerbExample,
                  presentMorpheme,
                  alignmentSubject,
                  alignmentObject,
                  "A"
                ),
                createAlignment(pronouns[5], presentMorpheme, alignmentSubject, alignmentObject, "O"),
                wordOrder
              )}
            </td>
          </tr>
          <tr>
            <td className="cell-alignment-verb">2SG</td>
            <td className="cell-alignment-verb">
              {sortWordOrder(
                pronouns[1],
                createAlignment(
                  transitiveVerbExample,
                  presentMorpheme,
                  alignmentSubject,
                  alignmentObject,
                  "A"
                ),
                createAlignment(pronouns[0], presentMorpheme, alignmentSubject, alignmentObject, "O"),
                wordOrder
              )}
            </td>
            <td className="cell-alignment-verb cell-forbidden"></td>
            <td className="cell-alignment-verb">
              {sortWordOrder(
                pronouns[1],
                createAlignment(
                  transitiveVerbExample,
                  presentMorpheme,
                  alignmentSubject,
                  alignmentObject,
                  "A"
                ),
                createAlignment(pronouns[2], presentMorpheme, alignmentSubject, alignmentObject, "O"),
                wordOrder
              )}
            </td>
            <td className="cell-alignment-verb">
              {sortWordOrder(
                pronouns[1],
                createAlignment(
                  transitiveVerbExample,
                  presentMorpheme,
                  alignmentSubject,
                  alignmentObject,
                  "A"
                ),
                createAlignment(pronouns[3], presentMorpheme, alignmentSubject, alignmentObject, "O"),
                wordOrder
              )}
            </td>
            <td className="cell-alignment-verb">
              {sortWordOrder(
                pronouns[1],
                createAlignment(
                  transitiveVerbExample,
                  presentMorpheme,
                  alignmentSubject,
                  alignmentObject,
                  "A"
                ),
                createAlignment(pronouns[4], presentMorpheme, alignmentSubject, alignmentObject, "O"),
                wordOrder
              )}
            </td>
            <td className="cell-alignment-verb">
              {sortWordOrder(
                pronouns[1],
                createAlignment(
                  transitiveVerbExample,
                  presentMorpheme,
                  alignmentSubject,
                  alignmentObject,
                  "A"
                ),
                createAlignment(pronouns[5], presentMorpheme, alignmentSubject, alignmentObject, "O"),
                wordOrder
              )}
            </td>
          </tr>
          <tr>
            <td className="cell-alignment-verb">3SG</td>
            <td className="cell-alignment-verb">
              {sortWordOrder(
                pronouns[2],
                createAlignment(
                  transitiveVerbExample,
                  presentMorpheme,
                  alignmentSubject,
                  alignmentObject,
                  "A"
                ),
                createAlignment(pronouns[0], presentMorpheme, alignmentSubject, alignmentObject, "O"),
                wordOrder
              )}
            </td>
            <td className="cell-alignment-verb">
              {sortWordOrder(
                pronouns[2],
                createAlignment(
                  transitiveVerbExample,
                  presentMorpheme,
                  alignmentSubject,
                  alignmentObject,
                  "A"
                ),
                createAlignment(pronouns[1], presentMorpheme, alignmentSubject, alignmentObject, "O"),
                wordOrder
              )}
            </td>
            <td className="cell-alignment-verb cell-forbidden"></td>
            <td className="cell-alignment-verb">
              {sortWordOrder(
                pronouns[2],
                createAlignment(
                  transitiveVerbExample,
                  presentMorpheme,
                  alignmentSubject,
                  alignmentObject,
                  "A"
                ),
                createAlignment(pronouns[3], presentMorpheme, alignmentSubject, alignmentObject, "O"),
                wordOrder
              )}
            </td>
            <td className="cell-alignment-verb">
              {sortWordOrder(
                pronouns[3],
                createAlignment(
                  transitiveVerbExample,
                  presentMorpheme,
                  alignmentSubject,
                  alignmentObject,
                  "A"
                ),
                createAlignment(pronouns[4], presentMorpheme, alignmentSubject, alignmentObject, "O"),
                wordOrder
              )}
            </td>
            <td className="cell-alignment-verb">
              {sortWordOrder(
                pronouns[2],
                createAlignment(
                  transitiveVerbExample,
                  presentMorpheme,
                  alignmentSubject,
                  alignmentObject,
                  "A"
                ),
                createAlignment(pronouns[5], presentMorpheme, alignmentSubject, alignmentObject, "O"),
                wordOrder
              )}
            </td>
          </tr>
          <tr>
            <td className="cell-alignment-verb">1PL</td>
            <td className="cell-alignment-verb cell-forbidden"></td>
            <td className="cell-alignment-verb">
              {sortWordOrder(
                pronouns[3],
                createAlignment(
                  transitiveVerbExample,
                  presentMorpheme,
                  alignmentSubject,
                  alignmentObject,
                  "A"
                ),
                createAlignment(pronouns[1], presentMorpheme, alignmentSubject, alignmentObject, "O"),
                wordOrder
              )}
            </td>
            <td className="cell-alignment-verb">
              {sortWordOrder(
                pronouns[3],
                createAlignment(
                  transitiveVerbExample,
                  presentMorpheme,
                  alignmentSubject,
                  alignmentObject,
                  "A"
                ),
                createAlignment(pronouns[2], presentMorpheme, alignmentSubject, alignmentObject, "O"),
                wordOrder
              )}
            </td>
            <td className="cell-alignment-verb cell-forbidden"></td>
            <td className="cell-alignment-verb">
              {sortWordOrder(
                pronouns[3],
                createAlignment(
                  transitiveVerbExample,
                  presentMorpheme,
                  alignmentSubject,
                  alignmentObject,
                  "A"
                ),
                createAlignment(pronouns[4], presentMorpheme, alignmentSubject, alignmentObject, "O"),
                wordOrder
              )}
            </td>
            <td className="cell-alignment-verb">
              {sortWordOrder(
                pronouns[3],
                createAlignment(
                  transitiveVerbExample,
                  presentMorpheme,
                  alignmentSubject,
                  alignmentObject,
                  "A"
                ),
                createAlignment(pronouns[5], presentMorpheme, alignmentSubject, alignmentObject, "O"),
                wordOrder
              )}
            </td>
          </tr>
          <tr>
            <td className="cell-alignment-verb">2PL</td>
            <td className="cell-alignment-verb">
              {sortWordOrder(
                pronouns[4],
                createAlignment(
                  transitiveVerbExample,
                  presentMorpheme,
                  alignmentSubject,
                  alignmentObject,
                  "A"
                ),
                createAlignment(pronouns[0], presentMorpheme, alignmentSubject, alignmentObject, "O"),
                wordOrder
              )}
            </td>
            <td className="cell-alignment-verb cell-forbidden"></td>
            <td className="cell-alignment-verb">
              {sortWordOrder(
                pronouns[4],
                createAlignment(
                  transitiveVerbExample,
                  presentMorpheme,
                  alignmentSubject,
                  alignmentObject,
                  "A"
                ),
                createAlignment(pronouns[2], presentMorpheme, alignmentSubject, alignmentObject, "O"),
                wordOrder
              )}
            </td>
            <td className="cell-alignment-verb">
              {sortWordOrder(
                pronouns[4],
                createAlignment(
                  transitiveVerbExample,
                  presentMorpheme,
                  alignmentSubject,
                  alignmentObject,
                  "A"
                ),
                createAlignment(pronouns[3], presentMorpheme, alignmentSubject, alignmentObject, "O"),
                wordOrder
              )}
            </td>
            <td className="cell-alignment-verb cell-forbidden"></td>
            <td className="cell-alignment-verb">
              {sortWordOrder(
                pronouns[4],
                createAlignment(
                  transitiveVerbExample,
                  presentMorpheme,
                  alignmentSubject,
                  alignmentObject,
                  "A"
                ),
                createAlignment(pronouns[5], presentMorpheme, alignmentSubject, alignmentObject, "O"),
                wordOrder
              )}
            </td>
          </tr>
          <tr>
            <td className="cell-alignment-verb">3PL</td>
            <td className="cell-alignment-verb">
              {sortWordOrder(
                pronouns[5],
                createAlignment(
                  transitiveVerbExample,
                  presentMorpheme,
                  alignmentSubject,
                  alignmentObject,
                  "A"
                ),
                createAlignment(pronouns[0], presentMorpheme, alignmentSubject, alignmentObject, "O"),
                wordOrder
              )}
            </td>
            <td className="cell-alignment-verb">
              {sortWordOrder(
                pronouns[5],
                createAlignment(
                  transitiveVerbExample,
                  presentMorpheme,
                  alignmentSubject,
                  alignmentObject,
                  "A"
                ),
                createAlignment(pronouns[1], presentMorpheme, alignmentSubject, alignmentObject, "O"),
                wordOrder
              )}
            </td>
            <td className="cell-alignment-verb cell-forbidden"></td>
            <td className="cell-alignment-verb">
              {sortWordOrder(
                pronouns[5],
                createAlignment(
                  transitiveVerbExample,
                  presentMorpheme,
                  alignmentSubject,
                  alignmentObject,
                  "A"
                ),
                createAlignment(pronouns[3], presentMorpheme, alignmentSubject, alignmentObject, "O"),
                wordOrder
              )}
            </td>
            <td className="cell-alignment-verb">
              {sortWordOrder(
                pronouns[5],
                createAlignment(
                  transitiveVerbExample,
                  presentMorpheme,
                  alignmentSubject,
                  alignmentObject,
                  "A"
                ),
                createAlignment(pronouns[4], presentMorpheme, alignmentSubject, alignmentObject, "O"),
                wordOrder
              )}
            </td>
            <td className="cell-alignment-verb cell-forbidden"></td>
          </tr>
        </tbody>
      </table>

      <table className="table-alignment-verb">
        <caption className="title-table">Intransitive verbs</caption>
        <tbody>
          <tr>
            <td className="cell-alignment-verb">1SG</td>
            <td className="cell-alignment-verb">
              {sortWordOrder(
                pronouns[0],
                createAlignment(
                  intransitiveVerbExample,
                  presentMorpheme,
                  alignmentSubject,
                  alignmentObject,
                  "S"
                ),
                "",
                wordOrder
              )}
            </td>
          </tr>
          <tr>
            <td className="cell-alignment-verb">2SG</td>
            <td className="cell-alignment-verb">
              {sortWordOrder(
                pronouns[1],
                createAlignment(
                  intransitiveVerbExample,
                  presentMorpheme,
                  alignmentSubject,
                  alignmentObject,
                  "S"
                ),
                "",
                wordOrder
              )}
            </td>
          </tr>
          <tr>
            <td className="cell-alignment-verb">3SG</td>
            <td className="cell-alignment-verb">
              {sortWordOrder(
                pronouns[2],
                createAlignment(
                  intransitiveVerbExample,
                  presentMorpheme,
                  alignmentSubject,
                  alignmentObject,
                  "S"
                ),
                "",
                wordOrder
              )}
            </td>
          </tr>
          <tr>
            <td className="cell-alignment-verb">1PL</td>
            <td className="cell-alignment-verb">
              {sortWordOrder(
                pronouns[3],
                createAlignment(
                  intransitiveVerbExample,
                  presentMorpheme,
                  alignmentSubject,
                  alignmentObject,
                  "S"
                ),
                "",
                wordOrder
              )}
            </td>
          </tr>
          <tr>
            <td className="cell-alignment-verb">2PL</td>
            <td className="cell-alignment-verb">
              {sortWordOrder(
                pronouns[4],
                createAlignment(
                  intransitiveVerbExample,
                  presentMorpheme,
                  alignmentSubject,
                  alignmentObject,
                  "S"
                ),
                "",
                wordOrder
              )}
            </td>
          </tr>
          <tr>
            <td className="cell-alignment-verb">3PL</td>
            <td className="cell-alignment-verb">
              {sortWordOrder(
                pronouns[5],
                createAlignment(
                  intransitiveVerbExample,
                  presentMorpheme,
                  alignmentSubject,
                  alignmentObject,
                  "S"
                ),
                "",
                wordOrder
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Alignment;
