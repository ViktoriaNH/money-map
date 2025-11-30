import { useState } from "react";
import "./InputFieldBase.scss";

const InputFieldBase = ({ field }) => {
  const [value, setValue] = useState("");

  return (
    <div className="form__group">
      <label htmlFor={field.id} className="form__label">
        {field.label}
      </label>

      <input
        id={field.id}
        name={field.name}
        value={value}
        onChange={(e) => setValue(e.target.value)} // !!!!!!!!!!!!!!!!!
        required={field.required}
        placeholder={field.placeholder}
        className="form__input-base"
      />
    </div>
  );
};

export default InputFieldBase;
