import React from "react";
import Logo from "/public/images/logo-icon.png";
import LogoText from "/public/images/logo-text.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container btn">
        <div className="logo">
          <img className="logo-img" src={Logo} alt="Logo" />
        </div>
        <img className="logo-name" src={LogoText} alt="Logo" />
        {/* <h3 className="company-name">Company Name</h3> */}
      </div>
      {/* <CtaButton name="SIGN IN" background="#39FFC4" /> */}
      <button className="btn cta-btn sign-in-btn">sign in</button>
    </div>
  );
};

export default Navbar;
