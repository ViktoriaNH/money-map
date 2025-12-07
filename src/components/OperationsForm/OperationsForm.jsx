import { useState } from "react";
import ColorPicker from "../ColorPicker";
import Input from "../Input/Input";
import "./OperationsForm.scss";
import closeModalIcon from "../../assets/icons/close-modal-icon.svg";
import Button from "../Button/Button";


const OperationsForm = (props) => {
  const { title, fields, onClose, hiddenInputWithColor = false } = props;

  const [walletColor, setWalletColor] = useState(null);


  return (
    <section className="operations">
      <div className="operations__inner">
        <img
          className="add-wallet-form__close-icon"
          src={closeModalIcon}
          alt="Закрыть форму"
          width={48}
          height={48}
          onClick={() => onClose()}
        />

        <h1 className="operations__title">{title}</h1>

        <form className="operations__form">
          {fields.map((field) => {
            if (field.type === "color-picker") {
              return (
                <div className="operations__field" key={field.id}>
                  <label className="operations__label">{field.label}</label>
                  <ColorPicker
                    value={walletColor}
                    onColorSelect={setWalletColor}
                  />
                </div>
              );
            }

            return (
              <Input
                className="operations__input"
                key={field.id}
                fields={[field]}
                onStatusChange={() => {}}
                serverErrors={{}}
                clearServerError={() => {}}
                disabled={false}
                variant="base"
              />
            );
          })}
          {hiddenInputWithColor && (
            <input type="hidden" name="color" value={walletColor || ""} />
          )}

          <Button submitText="Добавить" variant="saveOperation" />
        </form>
      </div>
    </section>
  );
};

export default OperationsForm;
