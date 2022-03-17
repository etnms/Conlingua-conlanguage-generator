import PersonalPronouns from "../PersonalPronouns";
import WordOrder from "../WordOrder";

const Grammar = (props) => {
  const { generation, plural, pronouns, words, wordOrder } = props;


  const pluralExampleEng = [
    "One river",
    "Two rivers",
    "One person",
    "Two people",
  ]; //29 two peson 162 river //22
  const pluralExample = [
    `${words[29]} ${words[22]}`,
    `${words[199]} ${words[22] + plural}`,
    `${words[29]} ${words[162]}`,
    `${words[199]} ${words[162] + plural}`,
  ];

  
  const renderGrammar = () => {
    return generation ? (
      <div>
          <div className="wrapper-plural">
              <p>Plural form is <strong>{plural === ""? "∅" : plural}</strong></p>
              <p>{pluralExampleEng[0]} {"=>"} <strong>{pluralExample[0]}</strong></p>
              <p>{pluralExampleEng[1]} {"=>"} <strong>{pluralExample[1]}</strong></p>
              <p>{pluralExampleEng[2]} {"=>"} <strong>{pluralExample[2]}</strong></p>
              <p>{pluralExampleEng[3]} {"=>"} <strong>{pluralExample[3]}</strong></p>
          </div>
        <PersonalPronouns
          pronouns={pronouns}
          generation={generation}></PersonalPronouns>
        <h2>Examples</h2>
        <WordOrder
          words={words}
          pronouns={pronouns}
          wordOrder={wordOrder}
          generation={generation}></WordOrder>
      </div>
    ) : (
      <div className="center">
        <h1 className="title-m">
          Generate a language first and then come back to see its grammar!
        </h1>
      </div>
    );
  };
  return renderGrammar();
};

export default Grammar;
