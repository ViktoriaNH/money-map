import { Link } from "react-router-dom";
import "./Input.scss";
import InputField from './../InputField/InputField';


const Input = ({
  fields,
  message,
  onStatusChange,
  serverErrors,
  clearServerError,
  variant = "auth",
}) => {
  return (
    <div className={`form__container form__container--${variant}`}>
      {fields.map((field) => (
        <InputField
          key={field.id}
          field={field}
          message={message}
          onStatusChange={onStatusChange}
          serverError={serverErrors[field.id]}
          clearServerError={clearServerError}
          variant={variant}
        />
      ))}
    </div>
  );
};

export default Input;
