import OperationsForm from "../OperationsForm/OperationsForm";
import "./AddWalletForm.scss";
import { addWalletfields } from "../../data/operationsFormFields";
import Button from "../Button/Button";
import useWalletForm from "./../../hooks/useWalletFrom";
import closeModalIcon from "../../assets/icons/close-modal-icon.svg";

const AddWalletForm = (props) => {
  const { onAddWallet, onClose } = props;

  const { handleSubmit } = useWalletForm(onAddWallet);

  const operationTitle = "Добавление кошелька";
  const submitTitle = "Добавить";

  return (
    <main className="add-wallet-form">
      <div className="add-wallet-form__inner">
        <img
          className="add-wallet-form__close-icon"
          src={closeModalIcon}
          alt="Закрыть форму"
          width={48}
          height={48}
          onClick={() => onClose()}
        />

        <OperationsForm
          title={operationTitle}
          fields={addWalletfields}
          submitText={submitTitle}
          onSubmit={handleSubmit}
          hiddenInputWithColor={true}
        />
        <Button
          submitText="Добавить"
          variant="saveOperation"
  
        />
      </div>
    </main>
  );
};

export default AddWalletForm;
