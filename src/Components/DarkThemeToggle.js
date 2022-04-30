import "./Parameters/CheckboxSlider.scss";
import "./DarkThemeToggle.scss";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightlightIcon from "@mui/icons-material/Nightlight";
import { useEffect } from "react";

const DarkThemeToggle = ({ setTheme }) => {
  useEffect(() => {
    if (localStorage.getItem("darkmode") === "darkmode")
      document.querySelector("input[name='toggle-darkmode']").checked = true;
    else document.querySelector("input[name='toggle-darkmode']").checked = false;
  });

  const toggleTheme = (e) => {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-color-scheme", "dark");
      localStorage.setItem("darkmode", "darkmode");
      setTheme("dark");
    } else {
      localStorage.setItem("darkmode", "lightmode");
      document.documentElement.setAttribute("data-color-scheme", "light");
      setTheme("light");
    }
  };

  return (
    <div className="toggle-dark-theme">
      <WbSunnyIcon />
      <label className="switch">
        <input type="checkbox" name="toggle-darkmode" onChange={(e) => toggleTheme(e)} />
        <span className="slider round"></span>
      </label>
      <NightlightIcon />
    </div>
  );
};

export default DarkThemeToggle;
