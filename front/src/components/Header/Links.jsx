import React from "react";
import { NavLink } from "react-router-dom";
import "./Links.css";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/actions";

function Links() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    window.location.reload();
  };

  return (
    <nav className="links">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
      <NavLink to="/" onClick={handleLogout}>
        Logout
      </NavLink>
    </nav>
  );
}

export default Links;
