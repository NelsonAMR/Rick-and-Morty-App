import React from "react";
import "./Header.css";
import Logo from "./Logo";
import Nav from "./Nav";

function Header({ onSearch }) {
  return (
    <div className="header">
      <div className="header-container">
        <Logo />
        <Nav onSearch={onSearch} />
      </div>
    </div>
  );
}

export default Header;
