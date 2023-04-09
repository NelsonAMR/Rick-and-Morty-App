import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Header from "./components/Header/Header";
import About from "./pages/About";
import Detail from "./pages/Detail";
import Error from "./pages/Error";
import Favorites from "./pages/Favorites";
import Form from "./pages/Form";
import CreateUser from "./pages/CreateUser";
import { useSelector } from "react-redux";

function App() {
  const { access } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const url = "http://localhost:3001/rickandmorty/onsearch";
  const [characters, setCharacters] = useState([]);
  const onSearch = (character) => {
    fetch(`${url}/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name && !characters.find((char) => char.id === data.id)) {
          setCharacters((oldChars) => [data, ...oldChars]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  const { pathname } = useLocation();

  useEffect(() => {
    !access && pathname !== "/signup" && navigate("/");
  }, [access, navigate, pathname]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/signup" element={<CreateUser />} />
        <Route element={<Header onSearch={onSearch} />}>
          <Route
            path="/home"
            element={<Cards characters={characters} onClose={onClose} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/favorites" element={<Favorites onClose={onClose} />} />
        </Route>
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
