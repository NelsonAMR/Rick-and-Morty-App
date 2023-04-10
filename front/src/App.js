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
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const url = "http://localhost:3001/rickandmorty/chars";
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const showCards = async () => {
    try {
      const resp = await fetch(`${url}/?page=${page}&name=${search}`);
      const data = await resp.json();

      setInfo({ ...info, ...data.info });
      setCharacters([...data.results]);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    showCards(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, search]);

  const { pathname } = useLocation();

  useEffect(() => {
    !access && pathname !== "/signup" && navigate("/");
  }, [access, navigate, pathname]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/signup" element={<CreateUser />} />
        <Route
          element={
            <Header
              setSearch={setSearch}
              setPage={setPage}
              setInfo={setInfo}
              info={info}
              page={page}
            />
          }
        >
          <Route path="/home" element={<Cards characters={characters} />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
