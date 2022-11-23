import { useState, useEffect } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

import ColorPicker from "../components/ColorPicker";
import TemplateBox from "../components/TemplateBox";

const Templates = ({ setValues, fetchedData }) => {
  const [fetchPallete, setFetchPallete] = useState({
    pallete: [],
    currentPallete: 0,
    pickedColor: "classicblack",
  });

  const [allThemes, setAllthemes] = useState([]);
  const [currentTheme, setCurrentTheme] = useState(0);
  const [theme, setTheme] = useState(null);

  const [formValues, setFormValues] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    if (fetchedData && Object.keys(fetchedData).length !== 0) {
      setFormValues(fetchedData.formValues);

      setTheme(fetchedData.themes[0]);
      setAllthemes(fetchedData.themes);

      setFetchPallete({
        pallete: fetchedData.pallete,
      });
    }
  }, [fetchedData]);

  useEffect(() => {
    setTheme(allThemes?.[currentTheme]);
  }, [currentTheme, allThemes]);

  const handlePickColor = ({ id, name }) => {
    setFetchPallete({
      ...fetchPallete,
      currentPallete: id - 1,
      pickedColor: name.toLowerCase().replaceAll(/\s/g, ""),
    });
  };

  const handleThemeChange = () => {
    setCurrentTheme(
      currentTheme === allThemes?.length - 1 ? 0 : currentTheme + 1
    );
    setTheme(allThemes?.[currentTheme]);
  };

  const handleNavigateWithParams = () => {
    navigate({
      pathname: "/create",
      search: createSearchParams({
        theme: theme.name,
        color: fetchPallete.pickedColor,
      }).toString(),
    });
    const newResume = { theme: theme.name, color: fetchPallete.pickedColor };
    localStorage.setItem("template", JSON.stringify(newResume));
    setValues(formValues);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6 color-picker-holder mbc-2">
          <h2 className="component-heading">{theme?.name}</h2>
          <p>{theme?.desc}</p>
          <ColorPicker
            pallete={fetchPallete.pallete}
            currentPallete={fetchPallete.currentPallete}
            pickedColor={fetchPallete.pickedColor}
            handlePickColor={handlePickColor}
          />
        </div>
        <div className="col-sm-12 col-md-6 mbc-2">
          <TemplateBox
            fetchedData={fetchedData}
            pickedColor={fetchPallete.pickedColor}
            theme={theme}
            handleThemeChange={handleThemeChange}
          />
        </div>
        <div className="col-sm-12 mbc-2">
          <button className="btn btn-cta" onClick={handleNavigateWithParams}>
            Select this template
          </button>
        </div>
      </div>
    </div>
  );
};

export default Templates;
