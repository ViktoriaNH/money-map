import OperationsForm from "../OperationsForm/OperationsForm";
import "./AddWalletForm.scss";
import { addWalletfields } from "../../data/operationsFormFields";

const AddWalletForm = () => {
  const operationTitle = "Добавление кошелька";
  const submitTitle = "Добавить";

  return (
    <main>
      <OperationsForm
        title={operationTitle}
        fields={addWalletfields}
        submitText={submitTitle}
      />
    </main>
  );
};

export default AddWalletForm;
