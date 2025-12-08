
import { walletColors } from "../../data/walletColors";
import "./ColorPicker.scss";

const ColorPicker = (props) => {
  const {
    value,
    onColorSelect,
    // setWalletColor
  } = props

  return (
    <div className="color-picker">
      {walletColors.map((color) => (
        <div
          key={color}
          className={`color-picker__item ${
            value === color ? "color-picker__item--active" : ""
          }`}
          style={{ backgroundColor: color }}
          onClick={() => onColorSelect(color)}
        >
          {value === color && (
            <span className="color-picker__checked"></span>
          )}
        </div>
      ))}
    </div>
  );
};

export default ColorPicker;
