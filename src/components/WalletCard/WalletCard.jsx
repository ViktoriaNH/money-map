import "./WalletCard.scss";

const WalletCard = (props) => {
  const {
    name, 
    amount,
    walletColor,
  } = props;
  
  return (
    <div
      className="wallet-card"
      style={{ backgroundColor: walletColor || "#eee" }}
    >
      <h2>{name}</h2>
      <span>{amount}</span>
    </div>
  );
};

export default WalletCard;
