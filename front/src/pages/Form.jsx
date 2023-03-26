import React, { useEffect, useState } from "react";
import "./Form.css";
import logo from "../assets/logo.png";
import validation from "../helpers/validationForm";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ user: "", pass: "" });
  const [errors, setErrors] = useState({});
  const [access, setAccess] = useState(false);

  const handleChange = (e) => {
    const prop = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [prop]: value });
    setErrors(validation({ ...userData, [prop]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { user, pass } = userData;

    if (!user || !pass) {
      const obj = {};
      if (!user) obj.user = "Debe ingresar su correo";
      if (!pass) obj.pass = "Debe ingresar su contraseña";

      setErrors({ ...obj });

      return;
    }

    if (!Object.entries(errors).length) {
      setUserData({ user: "", pass: "" });
      setErrors({});
      setAccess(true);
    } else {
      alert("Debe llenar todos los campos");
    }
  };

  useEffect(() => {
    access && navigate("/home");
  }, [access, navigate]);

  return (
    <div className="form">
      <form action="submit" className="form-cont" onSubmit={handleSubmit}>
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-img form-logo" />
        </div>
        <div className="form-camp">
          <input
            type="text"
            name="user"
            placeholder="Ingresa tu correo"
            autoComplete="off"
            value={userData.user}
            onChange={handleChange}
            className={errors.user && "error"}
          />
          {errors.user && <p>{errors.user}</p>}
        </div>
        <div className="form-camp">
          <input
            type="password"
            name="pass"
            placeholder="Ingresa tu contraseña"
            autoComplete="off"
            value={userData.pass}
            onChange={handleChange}
            className={errors.pass && "error"}
          />
          {errors.pass && <p>{errors.pass}</p>}
        </div>
        <button type="submit" className="form-button">
          Ingresar
        </button>
      </form>
    </div>
  );
}

export default Form;