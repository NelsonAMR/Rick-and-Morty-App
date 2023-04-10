import React from "react";
import Links from "./Links";
import SearchBar from "./SearchBar";
import "./Nav.css";

function Nav({ setSearch, setPage }) {
  return (
    <div className="nav">
      <SearchBar setSearch={setSearch} setPage={setPage} />
      <Links />
    </div>
  );
}

export default Nav;
