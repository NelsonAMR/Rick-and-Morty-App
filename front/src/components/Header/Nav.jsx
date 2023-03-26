import React from "react";
import Links from "./Links";
import SearchBar from "./SearchBar";
import "./Nav.css";

function Nav({ onSearch }) {
  return (
    <div className="nav">
      <SearchBar onSearch={onSearch} />
      <Links />
    </div>
  );
}

export default Nav;
