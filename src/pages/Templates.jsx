import { useState, useEffect } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import ColorPicker from "../components/ColorPicker";
import TemplateBox from "../components/TemplateBox";

import { pallete, themes } from "../tempData";

const Templates = () => {
  const [currentPallete, setCurrentPallete] = useState(0);
  const [pickedColor, setPickedColor] = useState("classicblack");
  const [currentTheme, setCurrentTheme] = useState(0);
  const [theme, setTheme] = useState(themes[0]);

  const navigate = useNavigate();

  useEffect(() => {
    setTheme(themes[currentTheme]);
  }, [currentTheme]);

  const handlePickColor = (item) => {
    setCurrentPallete(item.id - 1);
    setPickedColor(item.name.toLowerCase().replaceAll(/\s/g, ""));
  };

  const handleThemeChange = () => {
    if (currentTheme === themes.length - 1) {
      setCurrentTheme(0);
    } else {
      setCurrentTheme(currentTheme + 1);
    }
    setTheme(themes[currentTheme]);
  };

  const handleNavigateWithParams = () => {
    navigate({
      pathname: "/create",
      search: createSearchParams({
        theme: theme.name,
        color: pickedColor,
      }).toString(),
    });
    const newObj = { theme: theme.name, color: pickedColor };
    localStorage.setItem("template", JSON.stringify(newObj));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6 color-picker-holder mb-2">
          <h2 className="component-heading">{theme.name}</h2>
          <p>{theme.desc}</p>
          <ColorPicker
            pallete={pallete}
            currentPallete={currentPallete}
            pickedColor={pickedColor}
            handlePickColor={handlePickColor}
          />
        </div>
        <div className="col-sm-12 col-md-6">
          <TemplateBox
            pickedColor={pickedColor}
            theme={theme}
            handleThemeChange={handleThemeChange}
          />
        </div>
        <div className="col-sm-12 mb-2">
          <button className="btn btn-cta" onClick={handleNavigateWithParams}>
            Select this template
          </button>
        </div>
      </div>
    </div>
  );
};

export default Templates;
