
import usePageTitle from "../hooks/usePageTitle";
import Header from "../layouts/Header/Header";
import PageWrapper from "../layouts/PageWrapper";
import Balance from "../sections/Balance";
import Greeting from "../sections/Greeting/Greeting";
import LastTransactions from "../sections/LastTransactions/LastTransactions";

const Dashboard = () => {

  usePageTitle("Главная панель");

  return (
    <div className="dashboard">
      <Header />
      <PageWrapper>
        <Greeting />
        <Balance />
        <LastTransactions />
      </PageWrapper>
    </div>
  );
};

export default Dashboard;
