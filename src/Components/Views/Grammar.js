import "./Grammar.scss";
import PersonalPronouns from "../PersonalPronouns";
import WordOrder from "../WordOrder";
import Alignment from "../Grammar_Components/Alignment";
import Tenses from "../Grammar_Components/Tenses";
import { useContext } from "react";
import ContextGrammar from "../../ContextGrammar";

const Grammar = () => {
  const contextGrammar = useContext(ContextGrammar);
  const {generation, languageName, plural, words } = contextGrammar;
  const pluralExampleEng = ["One river", "Two rivers", "One person", "Two people"]; 
  const pluralExample = [
    `${words[29]} ${words[22]}`,
    `${words[199]} ${words[22] + plural}`,
    `${words[29]} ${words[162]}`,
    `${words[199]} ${words[162] + plural}`,
  ];

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
