
import usePageTitle from "../hooks/usePageTitle";
import Header from "../layouts/Header/Header";
import PageWrapper from "../layouts/PageWrapper";
import Balance from "../sections/Balance/Balance";
import Greeting from "../sections/Greeting/Greeting";
import LastTransactions from "../sections/LastTransactions/LastTransactions";
import Wallets from "../sections/Wallets";

const Dashboard = () => {

  usePageTitle("Главная панель");

  return (
    <div className="dashboard">
      <Header />
      <PageWrapper>
        <Greeting />
        <Wallets />
        <LastTransactions />
      </PageWrapper>

    </div>
  );
};

export default Dashboard;
