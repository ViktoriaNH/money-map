import OperationsForm from "../OperationsForm/OperationsForm";
import "./AddWalletForm.scss";
import { addWalletfields } from "../../data/operationsFormFields";
import { useState } from "react";
import ColorPicker from './../ColorPicker/index';

const AddWalletForm = () => {
  const operationTitle = "Добавление кошелька";
  const submitTitle = "Добавить";

  const [walletColor, setWalletColor] = useState(null);

  return (
    <main>
      <OperationsForm
        title={operationTitle}
        fields={addWalletfields}
        submitText={submitTitle}
      />

      <ColorPicker value={walletColor} onColorSelect={setWalletColor} />

    

    </main>
  );
};

export default AddWalletForm;
