import Button from "../Button/Button";
import Input from "../Input/Input";
import "./OperationsForm.scss";

const OperationsForm = ({ title, fields, submitText }) => {
  return (
    <section className="operations">
      <div className="operations__inner">
        <form className="operations__form">
          <h1 className="operations__title">{title}</h1>

          <Input
            fields={fields}
            onStatusChange={() => {}}
            serverErrors={{}}
            clearServerError={() => {}}
            disabled={false}
            variant="base"
          />

          <Button submitText={submitText} variant="saveOperation" />
        </form>
      </div>
    </section>
  );
};

export default OperationsForm;

