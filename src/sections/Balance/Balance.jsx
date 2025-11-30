import ColorPicker from "../../components/ColorPicker/ColorPicker";
import WalletCard from "../../components/WalletCard/WalletCard";
import "./Balance.scss";

const Balance = ({ selectedColor }) => {
  return (
    <section className="balance">
      <div className="balance__inner">
        <h1 className="balance__title">Баланс</h1>
        <span className="balance__amount">3000 BYN</span>
        <WalletCard walletColor={selectedColor} />
      </div>
    </section>
  );
};

export default Balance;
