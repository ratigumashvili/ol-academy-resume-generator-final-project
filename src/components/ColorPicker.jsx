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
              backgroundColor: `${item.value}`,
            }}
          >
            <input
              type="radio"
              name="color"
              value={item.value}
              onChange={() => {
                handlePickColor(item);
              }}
              checked={item.value === currentColor}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
