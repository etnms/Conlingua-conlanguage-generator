import { useContext } from "react";
import ContextGrammar from "../ContextGrammar";
import data from "../Data/englishList.json";

const WordOrder = () => {
  const contextGrammar = useContext(ContextGrammar);

  const {pronouns, wordOrder, words} = contextGrammar;

  // Factory function for basic sentence structure
  function Sentence(subject, verb, object) {
    return {
      subject: subject,
      verb: verb,
      object: object,
    };
  }

  const sentence1 = Sentence("He", data[178] + "s", `${data[18]}`);
  const sentence1Gloss = Sentence("3SG", "V", "O");
  const sentence1Translation = Sentence(pronouns[2], `${words[178]}`, `${words[18]}`);

  const sortingWordOrder = (sentence, wordOrder) => {
    switch (wordOrder) {
      case "SOV":
        return `${sentence.subject} ${sentence.object} ${sentence.verb} `;
      case "SVO":
        return `${sentence.subject} ${sentence.verb} ${sentence.object} `;
      case "VSO":
        return `${sentence.verb} ${sentence.subject} ${sentence.object} `;
      case "VOS":
        return `${sentence.verb} ${sentence.object} ${sentence.subject} `;
      case "OSV":
        return `${sentence.object} ${sentence.subject} ${sentence.verb} `;
      case "OVS":
        return `${sentence.object} ${sentence.verb} ${sentence.subject} `;
      default:
        return null;
    }
  };

  return (
    <section className="section-grammar">
      <h2 className="section-title">Word order</h2>
        <h3 className="section-subtitle">Word order is <strong className="grammar-bold">{wordOrder}</strong></h3>
        <p className="section-example">{sortingWordOrder(sentence1, wordOrder)}</p>
        <p className="section-example">{sortingWordOrder(sentence1Translation, wordOrder)}</p>
        <p className="section-example">{sortingWordOrder(sentence1Gloss, wordOrder)}</p>

    </section>
  );
};

export default WordOrder;
