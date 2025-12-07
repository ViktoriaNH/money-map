import { useState } from "react";
import Button from "../../components/Button/Button";
import WalletsList from "../../components/WalletsList/WalletsList";
import "./Balance.scss";
import OperationsForm from "./../../components/OperationsForm/index";
import { addWalletfields } from "./../../data/operationsFormFields";
import useWalletForm from "./../../hooks/useWalletFrom";

const Balance = (props) => {
  const {
    onAddWallet,
  } = props;

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

  const operationTitle = "Добавление кошелька";
  const submitTitle = "Добавить";

  const { handleSubmit } = useWalletForm({
  onAddWallet: handleAddWallet,
  onClose: () => setIsAddWalletModalOpen(false),
});

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
          <OperationsForm
            title={operationTitle}
            fields={addWalletfields}
            submitText={submitTitle}
            onSubmit={handleSubmit}
            hiddenInputWithColor={true}
            onAddWallet={handleAddWallet}
            onClose={() => setIsAddWalletModalOpen(false)}
          />
        )}
      </div>
    </section>
  );
};

export default Balance;
