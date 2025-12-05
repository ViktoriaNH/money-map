import OperationsForm from "../OperationsForm/OperationsForm";
import "./AddWalletForm.scss";
import { addWalletfields } from "../../data/operationsFormFields";
import Button from "../Button/Button";
import useWalletForm from './../../hooks/useWalletFrom';

const AddWalletForm = (props) => {
  const { onAddWallet } = props;

    const { handleSubmit } = useWalletForm(onAddWallet);

  const operationTitle = "Добавление кошелька";
  const submitTitle = "Добавить";

  return (
    <main className="add-wallet-form">
      <div className="add-wallet-form__inner">
        <OperationsForm
          title={operationTitle}
          fields={addWalletfields}
          submitText={submitTitle}
          onSubmit={handleSubmit}
        />
        <Button submitText="Добавить" variant="saveOperation" />
      </div>
    </main>
  );
};

export default AddWalletForm;
