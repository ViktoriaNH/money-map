import "./modal.scss";

const Modal = (props) => {
  const {
    children,
    onClose, // функция по открытию / закрытию модалки
  } = props;

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={event => event.stopPropagation()}>{children}</div>
    </div>
  );
};

export default Modal;
