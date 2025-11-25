import usePageTitle from "../hooks/usePageTitle";
import Header from "../layouts/Header/Header";
import PageWrapper from "../layouts/PageWrapper";
import Greeting from "../sections/Greeting/Greeting";

const Dashboard = () => {
  usePageTitle("Главная панель");

  return (
    <div className="dashboard">
      <Header />
      <PageWrapper>
        <Greeting />
      </PageWrapper>
    </div>
  );
};

export default Dashboard;
