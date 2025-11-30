import { useState } from "react";
import "./InputField.scss";
import { Link } from "react-router-dom";
import { validateInputs } from "../../utils/validateInput";
import { getInputClass } from "../../utils/getInputClass";
import { usePassStatus } from "../../hooks/usePassStatus";

const InputField = ({
  field,
  onStatusChange,
  serverError,
  clearServerError,
}) => {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const isFilled = value.trim() !== "";

  const { hasError, message } = validateInputs(
    field,
    value,
    touched,
    serverError
  );

  const isSuccess = touched && isFilled && !hasError;

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (serverError) {
      clearServerError(field.id);
    }

    const successForButton = newValue.trim() !== "" && !hasError;
    onStatusChange(field.id, successForButton);
  };

  const handleBlur = () => {
    setTouched(true);
  };

  const inputType =
    field.type === "password"
      ? showPassword
        ? "text"
        : "password"
      : field.type;

  const inputClass = `
  ${getInputClass(field, isFilled, hasError)}
  ${isSuccess ? "form__input--success" : ""}
`;

  usePassStatus(isSuccess, field.id, onStatusChange);

  if (field.type === "checkbox") {
    return (
      <label htmlFor={field.id} className="form__checkbox">
        <input
          type="checkbox"
          id={field.id}
          name={field.name}
          className="form__checkbox-input"
        />
        <span className="form__checkbox-label">{field.label}</span>
      </label>
    );
  }

  return (
    <div className="form__group">
      <div className="form__group-main">
        <label htmlFor={field.id} className="form__label">
          {field.label}
        </label>

        <div className="form__group-secondary">
          <div className="form__input-status">
            {(hasError || isSuccess) && (
              <span className={hasError ? "text-error" : "text-success"}>
                {hasError ? "Error." : "Success."}
              </span>
            )}
          </div>

          {field.extra?.type === "link" && (
            <Link to={field.extra.href} className="form__forgot-password">
              {field.extra.text}
            </Link>
          )}
        </div>
      </div>

      <div
        className={`form__input-container ${
          field.type === "password" ? "form__input-container--password" : ""
        }`}
      >
        {field.iconLeft && (
          <img
            className="form__input-icon-left"
            src={field.iconLeft}
            alt=""
            width={24}
            height={24}
          />
        )}

        <input
          id={field.id}
          name={field.name}
          type={inputType}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          required={field.required}
          minLength={field.minLength}
          maxLength={field.maxLength}
          placeholder={field.placeholder}
          className={inputClass}
        />

        {field.type === "password" && (
          <img
            src={showPassword ? field.iconOpen : field.iconClose}
            className="form__input-icon-eye"
            alt="toggle password"
            width={24}
            height={24}
            style={{ cursor: "pointer" }}
            onClick={() => setShowPassword((prev) => !prev)}
          />
        )}

        {(hasError || isSuccess) && (
          <img
            src={hasError ? field.iconRightError : field.iconRightSuccess}
            className="form__input-icon-status"
            alt={hasError ? "error" : "success"}
            width={24}
            height={24}
          />
        )}
      </div>

      {message && (
        <div className="form__message">
          {hasError && field.iconRightError && (
            <img src={field.iconRightError} alt="" width={16} height={16} />
          )}
          {isSuccess && field.iconRightSuccess && (
            <img src={field.iconRightSuccess} alt="" width={16} height={16} />
          )}
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default InputField;
