import { useNavigate } from "react-router-dom";
import { addWalletfields } from "../data/operationsFormFields";

const useWalletForm = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();


           const formData = {};
    addWalletfields.forEach((field) => {
        formData[field.name] = e.target[field.name].value;
    })
    }


 
}


export default useWalletForm;