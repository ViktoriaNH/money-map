import { useState } from "react";
import Button from "../../components/Button/Button";
import WalletCard from "../../components/WalletCard/WalletCard";
import WalletsList from "../../components/WalletsList/WalletsList";
import "./Balance.scss";
import AddWalletForm from "../../components/AddWalletForm/AddWalletForm";

const Balance = () => {
  const [wallets, setWallets] = useState([]);

  const [isAddWalletModalOpen, setIsAddWalletModalOpen] = useState(false);

  // wallets — это обычная переменная, где хранятся все кошельки, которые добавит юзер.
  // он пока пустой []

  //     setWallets — это инструмент, который говорит React:
  // “Обнови значение wallets и перерисуй интерфейс”

  const handleAddWallet = (wallet) => {
    setWallets((prev) => [...prev, wallet]);
    // [...prev, wallet] означает: положи в новый массив всё, что было раньше, и добавь новый кошелёк в конец
  };

  return (
    <section className="balance">
      <div className="balance__inner">
        <h1 className="balance__title">Баланс</h1>
        <span className="balance__amount">3000 BYN</span>
        <WalletsList wallets={wallets} />
        <Button
          className="balance__button"
          variant="addOperations"
          submitText="Добавить кошелек"
          type="button"
          onClick={() => setIsAddWalletModalOpen(true)}
        />

        {isAddWalletModalOpen && (
          <AddWalletForm onAddWallet={handleAddWallet} 
          onClose={() => setIsAddWalletModalOpen(false)}/>
        )}
      </div>
    </section>
  );
};

export default Balance;
