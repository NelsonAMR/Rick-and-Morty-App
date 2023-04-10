import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Links.css";
import { useDispatch, useSelector } from "react-redux";
import { clearFav, logoutUser } from "../../redux/actions";

function Links() {
  const [hide, setHide] = useState(true);

  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearFav());
    dispatch(logoutUser());
  };

  const handleHide = () => {
    if (hide) setHide(false);
    else setHide(true);
  };

  return (
    <div className="nav-cont" onClick={handleHide}>
      <div className="nav-user">
        <button className="user-btn">{user}</button>
      </div>
      <nav className={`links ${hide && "hide"}`}>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
        <NavLink to="/" onClick={handleLogout}>
          Salir
        </NavLink>
      </nav>
    </div>
  );
}

export default Links;
