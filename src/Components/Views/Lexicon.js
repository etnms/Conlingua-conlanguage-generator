import data from "../../Data/englishList.json";
import "./Lexicon.scss";
//import "../../Scrollbar.scss";

/// Include search bar would be great? ///
const Lexicon = (props) => {
  const { generation, words } = props;

  const listWords = () => {
    return words.map((x) => (
      <li key={Math.floor(Math.random() * 10000000)}>{x}</li>
    ));
  };

  const listEnglishWords = () => {
    return data.map((x) => <li key={x}>{x}</li>);
  };

  const renderLexicon = () => {
    return generation ? (
      <div className="wrapper-lexicon">
        <h1 className="title-lexicon">List of 200 words</h1>
        <div className="lexicon-view">
          <ol className="list-numbered">
            {generation ? listEnglishWords() : <div></div>}
          </ol>
          <ul className="list-default">{generation ? listWords() : null}</ul>
        </div>
      </div>
    ) : (
      <div className="centered">
        <h1 className="title-m">
          Generate a language first and then come back to see your lexicon!
        </h1>
      </div>
    );
  };

  return (
  renderLexicon()
  );
};

export default Lexicon;
