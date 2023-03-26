import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Logo.css";

function Logo() {
  return (
    <div className="logo">
      <Link to="/home">
        <img src={logo} alt="logo" className="logo-img" />
      </Link>
    </div>
  );
}

export default Logo;
