import "./WalletsList.scss";
import WalletCard from "../WalletCard/WalletCard";

const WalletsList = (props) => {
  const { wallets } = props;

  return (
    <div className="wallets-list">
      {wallets.map((wallet) => (
        <WalletCard
          key={wallet.id}
          name={wallet.name}
          amount={`${wallet.amount} BYN`}
          walletColor={wallet.color}
        />
      ))}
    </div>
  );
};

export default WalletsList;
