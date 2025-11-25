import Content from "../Content/Content";
import Navigation from "../Navigation/Navigation";
import "./PageWrapper.scss";

const PageWrapper = ({ children }) => (
  <div className="page-wrapper">
    <div className="page-wrapper__inner container ">
      <Navigation />
      <Content>{children}</Content>
    </div>
  </div>
);

export default PageWrapper;
