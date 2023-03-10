import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import NavBar from "./components/NavBar/NavBar";
import About from "./pages/About";
import Detail from "./pages/Detail";

function App() {
  const url = "https://rickandmortyapi.com/api/character";
  const [characters, setCharacters] = useState([]);
  const onSearch = (character) => {
    fetch(`${url}/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name && !characters.find((char) => char.id === data.id)) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  return (
    <div className="App">
      <NavBar onSearch={onSearch} />
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
