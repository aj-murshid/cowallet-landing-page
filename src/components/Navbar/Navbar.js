import React from "react";
import Logo from "/public/images/logo.png";
// import CtaButton from "../Button/Button";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container btn">
        <div className="logo">
          <img className="logo-img" src={Logo} alt="Logo" />
        </div>
        {/* <h3 className="company-name">Company Name</h3> */}
      </div>
      {/* <CtaButton name="SIGN IN" background="#39FFC4" /> */}
      <button className="btn cta-btn">sign in</button>
    </div>
  );
};

export default Navbar;
