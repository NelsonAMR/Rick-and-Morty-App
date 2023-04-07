import React from "react";
import { NavLink } from "react-router-dom";
import "./Links.css";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/actions";

function Links() {
  const dispatch = useDispatch();

  return (
    <nav className="links">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
      <NavLink to="/" onClick={() => dispatch(logoutUser())}>
        Logout
      </NavLink>
    </nav>
  );
}

export default Links;
