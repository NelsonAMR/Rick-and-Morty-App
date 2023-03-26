import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import "./Header.css";
import Logo from "./Logo";
import Nav from "./Nav";

function Header({ onSearch }) {
  return (
    <Fragment>
      <div className="header">
        <div className="header-container">
          <Logo />
          <Nav onSearch={onSearch} />
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Header;
