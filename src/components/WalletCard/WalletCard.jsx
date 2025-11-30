import "./WalletCard.scss";

const WalletCard = ({ walletColor }) => {
  return (
    <div
      className="wallet-card"
      style={{ backgroundColor: walletColor || "#eee" }}
    >
      <h1>Мой кошелёк</h1>
    </div>
  );
};

export default WalletCard;
