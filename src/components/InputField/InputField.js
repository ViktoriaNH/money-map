import InputFieldAuth from "./InputFieldAuth";
import InputFieldBase from "./InputFieldBase/InputFieldBase";

const InputField = (props) => {
  const { variant = "base" } = props;

  if (variant === "auth") {
    return <InputFieldAuth {...props} />;
  }

  return <InputFieldBase {...props} />;
};

export default InputField;
