import WalletCard from '../../components/WalletCard/WalletCard';
import './Balance.scss'

const Balance = () => {
return (
    <section className='balance'>
        <div className='balance__container'>
            <h1 className='balance__title'>Баланс</h1>
            <span>3000 BYN</span>
            <WalletCard />
        </div>

    </section>
)
}

export default Balance;