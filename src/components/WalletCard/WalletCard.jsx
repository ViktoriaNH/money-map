import "./WalletCard.scss";
import editWalletIcon from "../../assets/icons/edit-wallet.svg";

const WalletCard = (props) => {
  const { name, amount, walletColor } = props;

  return (
    <div
      className="wallet-card"
      style={{ backgroundColor: walletColor || "#eee" }}
    >
      <div className="wallet-card__title">
        <h2>{name}</h2>
        <img
          className="wallet-card__icon"
          src={editWalletIcon}
          alt="Редактировать кошелек"
          width={24}
          height={24}
          // onClick={}
        />
      </div>

      <span>{amount}</span>
    </div>
  );
};

export default WalletCard;
