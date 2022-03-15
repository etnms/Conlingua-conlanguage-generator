import data from "../Data/englishList.json";

const WordOrder = (props) => {
  const { generation, pronouns, words, wordOrder } = props;
  // He works all day
  //pronouns[3]  data[70] data[31] data[80]
  // the child is in the house
// 178 18
  // Factory function for basic sentence structure
  function Sentence(subject, verb, object) {
    return {
      subject: subject,
      verb: verb,
      object: object,
    };
  }

  const sentence1 = Sentence("He", data[178] + "s", `${data[18]}`);
  const sentence1Gloss = Sentence("3SG","V","O")
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
    <div>
      {generation ? (
        <div>
          {" "}
          <p>Word order is {wordOrder}</p>
          <p>{sortingWordOrder(sentence1, wordOrder)}</p>
          <p>{sortingWordOrder(sentence1Translation, wordOrder)}</p>
          <p>{sortingWordOrder(sentence1Gloss, wordOrder)}</p>
          <p>{`He ${data[178]}s ${data[18]}`}</p>
          <p>{`${pronouns[2]} ${words[178]} ${words[18]}`}</p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default WordOrder;
