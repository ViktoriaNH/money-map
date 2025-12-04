import AddWalletForm from "../components/AddWalletForm/AddWalletForm";
import usePageTitle from "../hooks/usePageTitle";
import Header from "../layouts/Header/Header";
import PageWrapper from "../layouts/PageWrapper";
import Balance from "../sections/Balance";
import Greeting from "../sections/Greeting/Greeting";

const Dashboard = (props) => {
  const {
    handleAddWallet
  } = props;

  usePageTitle("Главная панель");

  return (
    <div className="dashboard">
      <Header />
      <PageWrapper>
        <Greeting />
        <Balance />
        <AddWalletForm onAddWallet={handleAddWallet} />
      </PageWrapper>
    </div>
  );
};

export default Dashboard;
