import "./Grammar.scss";
import PersonalPronouns from "../PersonalPronouns";
import WordOrder from "../WordOrder";
import Alignment from "../Grammar_Components/Alignment";
import Tenses from "../Grammar_Components/Tenses";
import { useContext } from "react";
import ContextGrammar from "../../ContextGrammar";

const Grammar = () => {
  const contextGrammar = useContext(ContextGrammar);
  const { generation, languageName, plural, negation, words } = contextGrammar;

  // Hide stress in grammar examples to avoid 1) manipulation with prefix/suffix 
  // that would be overcomplicated for the scope of this app and
  // 2) allows to focus on grammar and not sounds
  const removeStressExamples = (word) => {
    if (word.includes("\u02C8")) {
      const newWord = word.replace("\u02C8", "");
      return newWord;
    }
  };

  // Define the basic examples for the grammar section
  const pluralExampleEng = ["One river", "Two rivers", "One person", "Two people"];
  const pluralExample = [
    `${removeStressExamples(words[29])} ${removeStressExamples(words[22])}`,
    `${removeStressExamples(words[199])} ${removeStressExamples(words[22] + plural)}`,
    `${removeStressExamples(words[29])} ${removeStressExamples(words[162])}`,
    `${removeStressExamples(words[199])} ${removeStressExamples(words[162] + plural)}`,
  ];

  const negationExample = ["No river", `${negation} ${removeStressExamples(words[22])}`];

  const renderGrammar = () => {
    return generation ? (
      <main className="grammar">
        <h1 className="title-l">Grammar of {languageName}</h1>
        <section className="section-grammar">
          <h2 className="section-title">Plural</h2>
          <h3 className="section-subtitle">
            Plural form is <strong className="grammar-bold">{plural === "" ? "∅" : plural}</strong>
          </h3>
          <p className="section-example">
            {pluralExampleEng[0]} {"\u21e8"} <strong>{pluralExample[0]}</strong>
          </p>
          <p className="section-example">
            {pluralExampleEng[1]} {"\u21e8"} <strong>{pluralExample[1]}</strong>
          </p>
          <p className="section-example">
            {pluralExampleEng[2]} {"\u21e8"} <strong>{pluralExample[2]}</strong>
          </p>
          <p className="section-example">
            {pluralExampleEng[3]} {"\u21e8"} <strong>{pluralExample[3]}</strong>
          </p>
        </section>

        <section className="section-grammar">
          <h2 className="section-title">Negation</h2>
          <h3 className="section-subtitle">
            Negation is marked by <strong className="grammar-bold">{negation}</strong>
          </h3>
          <p className="section-example">
            {pluralExampleEng[0]} {"\u21e8"} <strong>{pluralExample[0]}</strong>
          </p>
          <p className="section-example">
            {negationExample[0]} {"\u21e8"} <strong>{negationExample[1]}</strong>
          </p>
        </section>

        <PersonalPronouns></PersonalPronouns>
        <Tenses></Tenses>
        <WordOrder></WordOrder>
        <Alignment></Alignment>
      </main>
    ) : (
      <main className="center">
        <h1 className="title-m">Generate a language first and then come back to see its grammar!</h1>
      </main>
    );
  };
  return renderGrammar();
};

export default Grammar;
