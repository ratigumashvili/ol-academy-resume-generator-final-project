const ColorPicker = ({
  pallete,
  currentPallete,
  currentColor,
  handlePickColor,
}) => {
  return (
    <div className="color-picker">
      <h4>
        Color <span>- {pallete[currentPallete]?.name}</span>
      </h4>
      <div className="color-picker-colors">
        {pallete.map((item) => (
          <div
            key={item.id}
            className="color-picker-item"
            style={{
              backgroundColor: `${item.color}`,
            }}
          >
            <input
              type="radio"
              name="color"
              value={item.color}
              onChange={() => {
                handlePickColor(item);
              }}
              checked={item.color === currentColor}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
