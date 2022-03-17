import { useEffect } from "react";
import "./VowelChart.scss";
import vowelList from "../Data/vowels.json";
import img from "../Img/vowel_chart_empty.png";

const VowelChart = (props) => {
  const { vowels, sortingSounds, soundsDistribution } = props;

  useEffect(() => {
    const hideEmptySpot = () => {
      let element = document.querySelectorAll(".vowel-display");
      element.forEach((el) => {
        if (!el.textContent) el.classList.toggle("empty");
      });
    };
    hideEmptySpot();
  });

  return (
    <div className="vowel">
      <span className="vowel-display close-front">
        {soundsDistribution(sortingSounds(vowels, vowelList), "i", "y")}
      </span>
      <span className="vowel-display close-mid">
        {soundsDistribution(sortingSounds(vowels, vowelList), "ɨ", "ʉ")}
      </span>
      <span className="vowel-display close-back">
        {soundsDistribution(sortingSounds(vowels, vowelList), "\u026f", "u")}
      </span>
      <span className="vowel-display close-front-near">
        {soundsDistribution(
          sortingSounds(vowels, vowelList),
          "\u026a",
          "\u028f"
        )}
      </span>
      <span className="vowel-display close-back-near">
        {soundsDistribution(sortingSounds(vowels, vowelList), "ʊ")}
      </span>
      <span className="vowel-display close-mid-front">
        {soundsDistribution(sortingSounds(vowels, vowelList), "e", "ø")}
      </span>
      <span className="vowel-display close-mid-center">
        {soundsDistribution(sortingSounds(vowels, vowelList), "ɘ", "ɵ")}
      </span>
      <span className="vowel-display close-mid-back">
        {soundsDistribution(sortingSounds(vowels, vowelList), "ɤ", "o")}
      </span>
      <span className="vowel-display close-mid-near">
        {soundsDistribution(sortingSounds(vowels, vowelList), "ə")}
      </span>
      <span className="vowel-display open-mid-front">
        {soundsDistribution(sortingSounds(vowels, vowelList), "ɛ", "œ")}
      </span>
      <span className="vowel-display open-mid-mid">
        {soundsDistribution(sortingSounds(vowels, vowelList), "ɜ", "ɞ")}
      </span>
      <span className="vowel-display open-mid-back">
        {soundsDistribution(sortingSounds(vowels, vowelList), "ʌ", "ɔ")}
      </span>
      <span className="vowel-display open-front-near">
        {soundsDistribution(sortingSounds(vowels, vowelList), "æ")}
      </span>
      <span className="vowel-display open-mid-near">
        {soundsDistribution(sortingSounds(vowels, vowelList), "ɐ")}
      </span>
      <span className="vowel-display open-front">
        {soundsDistribution(sortingSounds(vowels, vowelList), "a", "ɶ")}
      </span>
      <span className="vowel-display open-back">
        {soundsDistribution(sortingSounds(vowels, vowelList), "\u0251", "ɒ")}
      </span>
      <img src={img} alt="test"></img>
    </div>
  );
};

export default VowelChart;
