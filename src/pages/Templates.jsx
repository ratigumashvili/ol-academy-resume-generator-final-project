import { useState, useEffect } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

import ColorPicker from "../components/ColorPicker";
import TemplateBox from "../components/TemplateBox";

const Templates = ({ setValues, fetchedData }) => {
  const [formValues, setFormValues] = useState({});

  const [fetchPallete, setFetchPallete] = useState({
    pallete: [],
    currentPallete: 0,
    pickedColor: "classicblack",
  });

  const [fetchTheme, setFetchTheme] = useState({
    allThemes: [],
    currentTheme: 0,
    theme: null,
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (fetchedData && Object.keys(fetchedData).length !== 0) {
      setFormValues(fetchedData.formValues);

      setFetchPallete((prev) => {
        return {
          ...prev,
          pallete: fetchedData.pallete,
        };
      });

      setFetchTheme((prev) => {
        return {
          ...prev,
          theme: fetchedData.themes[0],
          allThemes: fetchedData.themes,
        };
      });
    }
  }, [fetchedData]);

  const { pallete, currentPallete, pickedColor } = fetchPallete;
  const { allThemes, currentTheme, theme } = fetchTheme;

  useEffect(() => {
    setFetchTheme((prev) => {
      return { ...prev, theme: allThemes?.[currentTheme] };
    });
  }, [currentTheme, allThemes]);

  const handlePickColor = ({ id, name }) => {
    setFetchPallete({
      ...fetchPallete,
      currentPallete: id - 1,
      pickedColor: name.toLowerCase().replaceAll(/\s/g, ""),
    });
  };

  const handleThemeChange = () => {
    currentTheme === allThemes?.length - 1
      ? setFetchTheme((prev) => ({ ...prev, currentTheme: 0 }))
      : setFetchTheme((prev) => ({ ...prev, currentTheme: +1 }));
  };

  const handleNavigateWithParams = () => {
    navigate({
      pathname: "/create",
      search: createSearchParams({
        theme: theme.name,
        color: pickedColor,
      }).toString(),
    });
    const newResume = { theme: theme.name, color: pickedColor };
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
            pallete={pallete}
            currentPallete={currentPallete}
            pickedColor={pickedColor}
            handlePickColor={handlePickColor}
          />
        </div>
        <div className="col-sm-12 col-md-6 mbc-2">
          <TemplateBox
            fetchedData={fetchedData}
            pickedColor={pickedColor}
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
