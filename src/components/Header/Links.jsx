import React from "react";
import { NavLink } from "react-router-dom";
import "./Links.css";

function Links() {
  return (
    <nav className="links">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
    </nav>
  );
}

export default Links;