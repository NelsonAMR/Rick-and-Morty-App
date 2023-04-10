import React, { useState } from "react";
import logo from "../assets/logo.png";
import "./CreateUser.css";
import { useNavigate } from "react-router-dom";
import validation from "../helpers/validationForm";
import Swal from "sweetalert2";

function CreateUser() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    user: "",
    email: "",
    pass1: "",
    pass2: "",
  });
  const [errors, setErrors] = useState({});

  const createUser = async (user, email, password) => {
    try {
      const response = await fetch("http://localhost:3001/rickandmorty/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error);
      }

      Swal.fire({
        icon: "success",
        title: "Bienvenido!",
        text: "Usuario creado con exito",
      });
      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Opss...",
        text: error.message,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { user, pass1, pass2, email } = userData;

    if (!user || !pass1 || !pass2 || !email) {
      const obj = {};
      if (!user) obj.user = "Debe ingresar su correo";
      if (!email) obj.email = "Debe ingresar su correo";
      if (!pass1) obj.pass1 = "Debe ingresar su contraseña";
      if (!pass2) obj.pass2 = "Debe ingresar su contraseña";

      setErrors({ ...obj });

      return;
    }

    if (!Object.entries(errors).length) {
      const { user, pass1, email } = userData;
      createUser(user, email, pass1);
    }
  };

  const handleChange = (e) => {
    const prop = e.target.name;
    const val = e.target.value;

    setUserData({ ...userData, [prop]: val });
    setErrors(validation({ ...userData, [prop]: val }));
  };

  return (
    <div className="form">
      <form action="submit" className="sign-cont" onSubmit={handleSubmit}>
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-img form-logo" />
        </div>

        <div className="form-camp">
          <input
            type="text"
            name="user"
            placeholder="Ingresa tu nombre de usuario"
            // autoComplete="off"
            value={userData.user}
            onChange={handleChange}
            className={errors.user && "error"}
          />

          {errors.user && <p>{errors.user}</p>}

          <input
            type="email"
            name="email"
            placeholder="Ingresa tu correo"
            // autoComplete="off"
            value={userData.email}
            onChange={handleChange}
            className={errors.email && "error"}
          />

          {errors.email && <p>{errors.email}</p>}

          <input
            type="password"
            name="pass1"
            placeholder="Ingresa tu contraseña"
            value={userData.pass1}
            onChange={handleChange}
            className={errors.pass1 && "error"}
            autoComplete="on"
          />

          {errors.pass1 && <p>{errors.pass1}</p>}

          <input
            type="password"
            name="pass2"
            placeholder="Vuelve a ingresar tu contraseña"
            value={userData.pass2}
            onChange={handleChange}
            className={errors.pass2 && "error"}
            autoComplete="on"
          />

          {errors.pass2 && <p>{errors.pass2}</p>}
        </div>

        <button type="submit" className="form-button sign-btn">
          Registrarse
        </button>

        <div className="or">
          <hr />
          <p> O </p>
          <hr />
        </div>

        <button
          type="button"
          className="form-button log-btn"
          onClick={() => navigate("/")}
        >
          Iniciar Sesíon
        </button>
      </form>
    </div>
  );
}

export default CreateUser;
