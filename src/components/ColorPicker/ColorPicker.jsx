import { useState } from "react";
import { walletColors } from "../../data/walletColors";
import "./ColorPicker.scss";

const ColorPicker = () => {
  const [walletColor, setWalletColor] = useState(null);

  return (
    <div className="color-picker">
      {walletColors.map((color) => (
        <div
          key={color}
          className={`color-picker__item ${
            walletColor === color ? "color-picker__item--active" : ""
          }`}
          style={{ backgroundColor: color }}
          onClick={() => setWalletColor(color)}
        >
          {walletColor === color && (
            <span className="color-picker__checked"></span>
          )}
        </div>
      ))}
    </div>
  );
};

export default ColorPicker;
