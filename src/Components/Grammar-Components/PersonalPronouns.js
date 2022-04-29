import { useContext } from "react";
import ContextGrammar from "../../ContextGrammar";

const PersonalPronouns = () => {

  const contextGrammar = useContext(ContextGrammar);
  const {pronouns} = contextGrammar;
  const basePronouns = ["1SG", "2SG", "3SG", "1PL", "2PL", "3PL"];

  const tablePronouns = () => {
    let i = -1;
    return basePronouns.map((x) => {
      i++;
      return (
        <tr key={x}>
          <td>{x}</td>
          <td><strong>{pronouns[i]}</strong></td>
        </tr>
      );
    });
  };

  return (
    <section className="section-grammar">
      <h2 className="section-title">Pronouns</h2>
      <div className="wrapper-table">

          <table>
            <tbody>{tablePronouns()}</tbody>
          </table>
    
      </div>
    </section>
  );
};

export default PersonalPronouns;
