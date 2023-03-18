import React from "react";
import "./Error.css";

function Error() {
  return (
    <div className="error-page">
      <div className="error-cont">
        <h1>404</h1>
        <h2>Ups! Parece que ocurrio un error</h2>
        <p>Por favor, verifica que la dirrecion este bien escrita!</p>
      </div>
    </div>
  );
}

export default Error;
