import { useState } from "react";
import { Link } from "react-router-dom";
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

const Templates = () => {
  const [currentPallete, setCurrentPallete] = useState(0);
  const [currentColor, setCurrentColor] = useState("#000000");

  const handlePickColor = (item) => {
    setCurrentPallete(item.id - 1);
    setCurrentColor(item.color);
  };
  return (
    <div className="container">
      <h2>Templates</h2>
      <div className="row">
        <div className="col-sm-12 col-md-6">
          Switch toggle <br />{" "}
          <ColorPicker
            pallete={pallete}
            currentPallete={currentPallete}
            currentColor={currentColor}
            handlePickColor={handlePickColor}
          />
        </div>
        <div className="col-sm-12 col-md-6">
          <TemplateBox currentColor={currentColor} />
        </div>
        <div className="col-sm-12">
          <Link to="/create">Select This Theme</Link>
        </div>
      </div>
    </div>
  );
};

export default Templates;
