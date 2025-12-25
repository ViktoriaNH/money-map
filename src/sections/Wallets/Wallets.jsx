import { useState } from "react";
import Button from "../../components/Button/Button";
import WalletsList from "../../components/WalletsList/WalletsList";
import "./Wallets.scss";
import OperationsForm from "../../components/OperationsForm/index";
import { addWalletfields } from "../../data/operationsFormFields";
import useWalletForm from "../../hooks/useWalletFrom";
import { countTotalAmountWallets } from "../../utils/countTotalAmountWallets";
import Modal from "../../components/Modal/Modal";

const Wallets = () => {
  const [wallets, setWallets] = useState([]);
  const [counterId, setCounterId] = useState(1);

  const [isAddWalletModalOpen, setIsAddWalletModalOpen] = useState(false);

  const handleAddWallet = (wallet) => {
    const walletWithId = { ...wallet, id: counterId };

    setWallets((prev) => [...prev, walletWithId]);

    setCounterId((prev) => prev + 1);
  };

  const operationTitle = "Добавление кошелька";
  const submitTitle = "Добавить";

  const { handleSubmit } = useWalletForm({
    onAddWallet: handleAddWallet,
    onClose: () => setIsAddWalletModalOpen(false),
  });

  return (
    <section className="wallets">
      <div className="wallets__inner">
        <h1 className="wallets__title">Баланс</h1>
        <span className="wallets__amount">
          {wallets.length > 0 ? (
            <>
              <span className="wallets__total-amount">
                {`${countTotalAmountWallets(wallets)} BYN`}
              </span>
              <WalletsList wallets={wallets} />
            </>
          ) : (
            "Кошельки еще не добавлены"
          )}
        </span>
        <Button
          className="wallets__button"
          variant="saveOperation"
          submitText="Добавить кошелек"
          type="button"
          onClick={() => setIsAddWalletModalOpen(true)}
        />

        {isAddWalletModalOpen && (
          <Modal onClose={() => setIsAddWalletModalOpen(false)}>
            <OperationsForm
              title={operationTitle}
              fields={addWalletfields}
              submitText={submitTitle}
              onSubmit={handleSubmit}
              hiddenInputWithColor={true}
              onAddWallet={handleAddWallet}
              onClose={() => setIsAddWalletModalOpen(false)}
            />
          </Modal>
        )}
      </div>
    </section>
  );
};

export default Wallets;
