import Balance from "../../sections/Balance/Balance";
import Content from "../Content/Content";
import Navigation from "../Navigation/Navigation";
import "./PageWrapper.scss";

const PageWrapper = ({ children }) => (
  <div className="page-wrapper">
    <div className="page-wrapper__inner container ">
      <Navigation />
      <Content>{children}</Content>
      <Balance />
    </div>
  </div>
);

export default PageWrapper;
