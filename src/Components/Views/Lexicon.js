import data from "../../Data/englishList.json";
import "./Lexicon.scss";

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

  
  const listBilingual = (enlishWords, words) => {
    let list = []
    for (let i = 0; i < words.length; i++){
      list.push(`${enlishWords[i]} \u21e8 ${words[i]}`)
    }
    return list.map((x) => <li key={x}>{x}</li>);
  };


  

  const renderLexicon = () => {
    return generation ? (
      <div className="wrapper-lexicon">
        <h1 className="title-lexicon">List of 200 words</h1>
        <div className="lexicon-view">
          <ol className="list-numbered">
            {generation ? listBilingual(data, words) : null}
          </ol>
        </div>
      </div>
    ) : (
      <div className="center">
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
