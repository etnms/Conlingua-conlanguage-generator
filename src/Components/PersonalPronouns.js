import { useState } from "react";

const PersonalPronouns = (props) => {
  const { pronouns, generation } = props;

  const [basePronouns, setBasePronouns] = useState([
    "1SG",
    "2SG",
    "3SG",
    "1PL",
    "2PL",
    "3PL",
  ]);

  const listPronouns = () => {
    return pronouns.map((x) => (
      <li key={Math.floor(Math.random() * 10000000)}>{x}</li>
    ));
  };

  const listPronounsNumbered = () => {
    return basePronouns.map((x) => (
      <li key={Math.floor(Math.random() * 10000000)}>{x}</li>
    ));
  };
  return (
    <div className="centered">
      <p>Pronouns</p>
      <div className="list-display">
        <ul className="list-default">
          {generation ? listPronounsNumbered() : <div></div>}
        </ul>
        <ul className="list-default">
          {generation ? listPronouns() : <div></div>}
        </ul>
      </div>
      
    </div>
  );
};

export default PersonalPronouns;
