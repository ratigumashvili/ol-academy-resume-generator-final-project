import { colourNameToHex } from "../helpers/helpers";

const ColorPicker = ({
  pallete,
  currentPallete,
  pickedColor,
  handlePickColor,
}) => {
  return (
    <div className="color-picker">
      <h4>
        Color <span>- {pallete[currentPallete]?.name}</span>
      </h4>
      <div className="color-picker-colors">
        {pallete.map((item) => {
          const { id, name } = item;
          return (
            <div
              key={id}
              className="color-picker-item"
              style={{
                backgroundColor: colourNameToHex(name),
              }}
            >
              <input
                type="radio"
                name="color"
                value={colourNameToHex(name)}
                onChange={() => {
                  handlePickColor(item);
                }}
                checked={colourNameToHex(name) === colourNameToHex(pickedColor)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ColorPicker;
