import { useState } from 'react';
import './WalletsList.scss';
import WalletCard from '../WalletCard/WalletCard';

const WalletsList = () => {
    const [wallets, setWallets] = useState([]);
    // wallets — это обычная переменная, где хранятся все кошельки, которые добавит юзер.
    // он пока пустой []

//     setWallets — это инструмент, который говорит React:
// “Обнови значение wallets и перерисуй интерфейс”

const handleAddWallet = (wallets) => {
    setWallets(prev => [...prev, wallets]) 
    // [...prev, wallet] означает: положи в новый массив всё, что было раньше, и добавь новый кошелёк в конец
}

return (
    <WalletCard />
)




}



export default WalletsList;

