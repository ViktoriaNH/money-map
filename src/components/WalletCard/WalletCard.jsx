import { useState } from 'react';
import ColorPicker from '../ColorPicker/ColorPicker';
import './WalletCard.scss';

const WalletCard = () => {
    const [walletColor, setWalletColor] = useState(null); 

return (
    <div
      className="wallet-card"
      style={{ backgroundColor: walletColor || "#eee" }}
    >
      <ColorPicker
        value={walletColor}
        onChange={setWalletColor}
      />

      <h1>Мой кошелёк</h1>
    </div>
  );
}

export default WalletCard;