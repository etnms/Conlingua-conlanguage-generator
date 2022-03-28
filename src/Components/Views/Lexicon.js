import { useEffect, useState } from "react";
import data from "../../Data/englishList.json";
import "./Lexicon.scss";

/// Include search bar would be great? ///
const Lexicon = (props) => {
  const { generation, languageName, words } = props;

  const [listToDisplay, setListToDisplay] = useState("Bilingual list");
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [bilingualList, setBilingualList] = useState([]);

  const listWords = () => {
    return words.map((x) => <li key={Math.floor(Math.random() * 10000000)}>{x}</li>);
  };

  const listEnglishWords = () => {
    return data.map((x) => <li key={x}>{x}</li>);
  };

  // Create a bilingual list with both sets of data
  const createListBilingual = (enlishWords, words) => {
    let list = [];
    for (let i = 0; i < words.length; i++) {
      list.push(`${enlishWords[i]} \u21e8 ${words[i]}`);
    }
    setBilingualList(list);
  };

  const listBilingual = () => {
    return bilingualList.map((x) => <li key={x}>{x}</li>);
  };

  const displayList = (listToDisplay) => {
    if (listToDisplay === "Bilingual list") return listBilingual();
    if (listToDisplay === "English only") return listEnglishWords();
    if (listToDisplay === `${languageName} only`) return listWords();
  };

  // Search individual items
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
  };

  useEffect(() => {
    createListBilingual(data, words);

    // Display search results if users use the list
    const searchList = (selectedList) => {
      const list = selectedList.filter((word) => word.includes(searchInput));
      setFilteredResults(list);
    };

    if (listToDisplay === "Bilingual list") searchList(bilingualList);
    if (listToDisplay === "English only") searchList(data);
    if (listToDisplay === `${languageName} only`) searchList(words);
  }, [searchInput, words, languageName, listToDisplay]); 
  // Bilinguallist is not included in the dependency array because of the hook (repetitions)

  const filterResultList = () => {
    return filteredResults.map((x) => <li key={Math.floor(Math.random() * 10000000)}>{x}</li>);
  };

  const renderLexicon = () => {
    return generation ? (
      <main className="lexicon">
        <h1 className="title-lexicon">List of 200 words</h1>
        <div className="wrapper-options-lexicon">
          <button onClick={() => setListToDisplay("Bilingual list")} className="btn btn-tertiary">
            Bilingual list
          </button>
          <button onClick={() => setListToDisplay("English only")} className="btn btn-tertiary">
            English only
          </button>
          <button onClick={() => setListToDisplay(`${languageName} only`)} className="btn btn-tertiary">
            {languageName} only
          </button>
          <input
            placeholder="Search for words"
            className="search-bar"
            name="lexicon-search-bar"
            type="text"
            onChange={(e) => searchItems(e.target.value)}
          />
        </div>
        <span className="span-current-list">
          Current view: <strong>{listToDisplay}</strong>
        </span>
        <div className="lexicon-view">
          <ol className="list-numbered">
            {generation ? (searchInput === "" ? displayList(listToDisplay) : filterResultList()) : null}
          </ol>
        </div>
      </main>
    ) : (
      <main className="center">
        <h1 className="title-m">Generate a language first and then come back to see your lexicon!</h1>
      </main>
    );
  };

  return renderLexicon();
};

export default Lexicon;
