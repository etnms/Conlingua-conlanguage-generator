import "./Sounds.scss";

const Sounds = (props) => {
  const { consonants, vowels, generation, languageName } = props;

  const phonoList = (list) => {
    let tmpList = "";
    for (let i = 0; i < list.length; i++) {
      tmpList += `/${list[i]}/ `;
    }
    return tmpList;
  };

  const renderSounds = () => {
    return generation ? (
      <div className="wrapper-phono">
        <h1 className="title-l">Phonology of {languageName}</h1>
        <div className="container container-consonnant">
          <h1 className="title-phono">Consonants</h1>
          <span>{phonoList(consonants)}</span>
        </div>
        <div className="container container-vowel">
          <h1 className="title-phono">Vowels</h1>
          <span>{phonoList(vowels)}</span>
        </div>
        <span>Breakdown of type of consonants</span>
      </div>
    ) : (
      <div className="centered">
        <h1 className="title-m">
          Generate a language first and then come back to see the different
          sounds of your language!
        </h1>
      </div>
    );
  };
  return renderSounds();
};

export default Sounds;
