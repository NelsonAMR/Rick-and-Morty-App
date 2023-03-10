import React from "react";
import SearchBar from "./SearchBar";
import "./NavBar.css";
import Logo from "./Logo";

function Nav({ onSearch }) {
  return (
    <div className="nav">
      <div className="nav-container">
        <Logo />
        <SearchBar onSearch={onSearch} />
      </div>
    </div>
  );
}

export default Nav;
