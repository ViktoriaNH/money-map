import OperationsForm from "../OperationsForm/OperationsForm";
import "./AddWalletForm.scss";
import { addWalletfields } from "../../data/operationsFormFields";
import Button from "../Button/Button";

const AddWalletForm = () => {
  const operationTitle = "Добавление кошелька";
  const submitTitle = "Добавить";

  return (
    <main className="add-wallet-form">
      <OperationsForm
        title={operationTitle}
        fields={addWalletfields}
        submitText={submitTitle}
      />
      <Button submitText="Добавить" variant="saveOperation" />
    </main>
  );
};

export default AddWalletForm;
