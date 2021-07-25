import React from "react";
import { Container } from "react-bootstrap";
import Logo from "../img/logo.png";

const Header = () => {
  return (
    <div className="header">
      <span className="overlay"></span>
      <Container>
        <a href="/">
          <img src={Logo} className="logo" alt="شعار الشركة" />
        </a>
        <h3 className="companyName">شركة روائع المتميزون للصناعات المعدنية</h3>
        <p className="companyQuote">
          Masterpieces for Metal Industries Company
        </p>
      </Container>
    </div>
  );
};
export default Header;
