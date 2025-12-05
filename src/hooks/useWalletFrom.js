import { useNavigate } from "react-router-dom";
import { addWalletfields } from "../data/operationsFormFields";

const useWalletForm = (onAddWallet) => {
//   const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {};
    addWalletfields.forEach((field) => {
      formData[field.name] = e.target[field.name].value;
    });

    onAddWallet(formData);
  };

  return {handleSubmit}
};

export default useWalletForm;

// 2. Зачем вообще что-то возвращать из хука?
// Хук — это чистая логика, он сам ничего не рендерит.
// Чтобы компонент мог использовать эту логику, компоненту нужно получить доступ к тем функциям, которые ты определила внутри хука.
// Хук говорит компоненту:
// «Вот, держи функцию handleSubmit.
// Когда форма будет отправлена — вызывай её».


// 3. Как компонент будет использовать возвращаемый объект

// Представь, что в AddWalletForm ты пишешь:

// const { handleSubmit } = useWalletForm(onAddWallet);

// Теперь у AddWalletForm есть доступ к функции handleSubmit.
// И теперь форма может использовать её:
// <form onSubmit={handleSubmit}>


// То есть:
// Форма вызывает handleSubmit
// handleSubmit собирает данные
// handleSubmit вызывает onAddWallet(formData)
// Родитель добавляет кошелёк в state