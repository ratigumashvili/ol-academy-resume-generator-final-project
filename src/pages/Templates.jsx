import { useState, useEffect } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import ColorPicker from "../components/ColorPicker";
import TemplateBox from "../components/TemplateBox";

const pallete = [
  { id: 1, color: "#000000", name: "Classic Black" },
  { id: 2, color: "#436975", name: "Night Sky" },
  { id: 3, color: "#3363EC", name: "Blueprint Blue" },
  { id: 4, color: "#48A0C1", name: "Sea Side" },
  { id: 5, color: "#7EBCA3", name: "Mint Teal" },
  { id: 6, color: "#ACB75A", name: "Martini Green" },
  { id: 7, color: "#9097BE", name: "Electric Purple" },
  { id: 8, color: "#AC7BAE", name: "Booming Violet" },
  { id: 9, color: "#E86262", name: "Vibrant Salmon" },
  { id: 10, color: "#99396F", name: "Vineyard Plum" },
  { id: 11, color: "#C5A3AB", name: "Blush Pink" },
  { id: 12, color: "#D39D2A", name: "Autumn Mustard" },
];

const themes = [
  {
    id: 1,
    name: "Angora",
    desc: "When you know you're a natural fit, the conversation is warm, you get that fuzzy feeling, and every fiber of your being says you're perfect for this job, there's no better design than Angora.",
  },
  {
    id: 2,
    name: "Blueprint",
    desc: "A place for everything and everything in it's place. Build your career on a solid foundation with the measured design elements in Blueprint. You're a total stud and you're sure to nail the interview.",
  },
];

const Templates = () => {
  const [currentPallete, setCurrentPallete] = useState(0);
  const [currentColor, setCurrentColor] = useState("#000000");
  const [currentTheme, setCurrentTheme] = useState(0);
  const [theme, setTheme] = useState(themes[0]);

  const navigate = useNavigate();

  useEffect(() => {
    setTheme(themes[currentTheme]);
  }, [currentTheme]);

  const handlePickColor = (item) => {
    setCurrentPallete(item.id - 1);
    setCurrentColor(item.color);
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
        color: currentColor.toString().slice(2),
      }).toString(),
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6 color-picker-holder">
          <h2>{theme.name}</h2>
          <p>{theme.desc}</p>
          <ColorPicker
            pallete={pallete}
            currentPallete={currentPallete}
            currentColor={currentColor}
            handlePickColor={handlePickColor}
          />
        </div>
        <div className="col-sm-12 col-md-6">
          <TemplateBox
            currentColor={currentColor}
            theme={theme}
            handleThemeChange={handleThemeChange}
          />
        </div>
        <div className="col-sm-12">
          <button className="btn btn-cta" onClick={handleNavigateWithParams}>
            Select this template
          </button>
        </div>
      </div>
    </div>
  );
};

export default Templates;
