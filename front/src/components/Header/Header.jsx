import React, { Fragment } from "react";
import { Outlet, useLocation } from "react-router-dom";
import "./Header.css";
import Logo from "./Logo";
import Nav from "./Nav";
import Pagination from "../Pagination/Pagination";

function Header({ setSearch, setPage, page, info }) {
  const { pathname } = useLocation();

  return (
    <Fragment>
      <div className="header">
        <div className="header-container">
          <Logo />
          <Nav setSearch={setSearch} setPage={setPage} />
        </div>
      </div>
      <Outlet />
      {pathname === "/home" && (
        <Pagination info={info} page={page} setPage={setPage} />
      )}
    </Fragment>
  );
}

export default Header;
