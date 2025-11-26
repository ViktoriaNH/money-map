import { walletColors } from "../../data/walletColors";
import "./ColorPicker.scss";

const ColorPicker = ({ value, onChange }) => {
  return (
    <div className="color-picker">
      {walletColors.map((color) => (
        <button
          key={color}
          type="button"
          className={`color-picker__item ${
            value === color ? "color-picker__item--active" : ""
          }`}
          style={{ backgroundColor: color }}
          onClick = {() => onChange}
        />
      ))}
    </div>
  );
};

export default ColorPicker;
