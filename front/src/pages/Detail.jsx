import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Detail.css";

function Detail() {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const url = "http://localhost:3001/rickandmorty/detail";
    fetch(`${url}/${id}`)
      .then((response) => response.json())
      .then((char) => setCharacter(char))
      .catch(() => window.alert("No hay personajes con ese ID"));
  }, [id]);

  return (
    <div className="detail">
      <div className="detail-cont">
        <div className="detail-info">
          <h2 className="detail-title">{character.name}</h2>
          <p>
            <b>Estado:</b> {character.status}
          </p>
          <p>
            <b>Especie:</b> {character.species}
          </p>
          <p>
            <b>Genero:</b> {character.gender}
          </p>
          <p>
            <b>Origen:</b> {character.origin?.name}
          </p>
        </div>
        <div className="detail-image">
          <img src={character.image} alt={character.name} />
        </div>
      </div>
    </div>
  );
}

export default Detail;
