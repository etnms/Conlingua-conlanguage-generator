import ConsonantChart from "../ConsonantChart";
import "./Sounds.scss";
import consonantList from "../../Data/consonants.json";
import VowelChart from "../VowelChart";
const Sounds = (props) => {
  const { consonants, vowels, generation, languageName } = props;

  const sortingSounds = (list, comp) => {
    list.sort((a, b) => comp.indexOf(a) - comp.indexOf(b));
    return list;
  };

  const phonoList = (list, listComp) => {
    let tmpList = "";
    for (let i = 0; i < sortingSounds(list, listComp).length; i++) {
      tmpList += `/${sortingSounds(list, listComp)[i]}/ `;
    }
    return tmpList;
  };

  const soundsDistribution = (sound, cell1, cell2) => {
    let text = "";
    for (let i = 0; i < sound.length; i++) {
      if (sound[i] === cell1) text += `/${sound[i]}/ `;
      if (sound[i] === cell2) text += `/${sound[i]}/`;
    }
    return text;
  };

  const renderSounds = () => {
    return generation ? (
      <div className="wrapper-phono">
        <h1 className="title-l">Phonology of {languageName}</h1>
        <div className="container container-consonnant">
          <h1 className="title-phono">Consonants</h1>
          <span>{phonoList(consonants, consonantList)}</span>
        </div>
        <div className="container container-vowel">
          <h1 className="title-phono">Vowels</h1>
          <span>{phonoList(vowels, consonantList)}</span>
        </div>
        <h2 className="title-l">Vowel chart</h2>
        <VowelChart vowels={vowels} sortingSounds={sortingSounds} soundsDistribution={soundsDistribution}></VowelChart>
        <ConsonantChart
          consonants={consonants}
          sortingSounds={sortingSounds}
          soundsDistribution={soundsDistribution}></ConsonantChart>
      </div>
    ) : (
      <div className="center">
        <h1 className="title-m">
          Generate a language first and then come back to see the different sounds of your language!
        </h1>
      </div>
    );
  };

  return renderSounds();
};

export default Sounds;
