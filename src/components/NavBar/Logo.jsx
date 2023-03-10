import React from "react";
import logo from "../../assets/logo.png";
import "./Logo.css";

function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="logo" />
    </div>
  );
}

export default Logo;
