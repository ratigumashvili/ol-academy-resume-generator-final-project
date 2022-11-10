import { useState } from "react";
import { Link } from "react-router-dom";
import ColorPicker from "../components/ColorPicker";

const pallete = [
  { id: 1, value: "#000000", name: "Classic Black" },
  { id: 2, value: "#436975", name: "Night Sky" },
  { id: 3, value: "#3363EC", name: "Blueprint Blue" },
  { id: 4, value: "#48A0C1", name: "Sea Side" },
  { id: 5, value: "#7EBCA3", name: "Mint Teal" },
  { id: 6, value: "#ACB75A", name: "Martini Green" },
  { id: 7, value: "#9097BE", name: "Electric Purple" },
  { id: 8, value: "#AC7BAE", name: "Booming Violet" },
  { id: 9, value: "#E86262", name: "Vibrant Salmon" },
  { id: 10, value: "#99396F", name: "Vineyard Plum" },
  { id: 11, value: "#C5A3AB", name: "Blush Pink" },
  { id: 12, value: "#D39D2A", name: "Autumn Mustard" },
];

const Templates = () => {
  const [currentPallete, setCurrentPallete] = useState(0);
  const [currentColor, setCurrentColor] = useState("#000000");

  const handlePickColor = (item) => {
    setCurrentPallete(item.id - 1);
    setCurrentColor(item.value);
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
        <div className="col-sm-12 col-md-6">Theme</div>
        <div className="col-sm-12">
          <Link to="/create">Select This Theme</Link>
        </div>
      </div>
    </div>
  );
};

export default Templates;
