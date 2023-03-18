import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./SearchBar.css";

export default function SearchBar({ onSearch }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [character, setCharacter] = useState("");
  const handleChange = (e) => setCharacter(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(character);
    setCharacter("");
    pathname !== "/home" && navigate("/home");
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        onChange={handleChange}
        value={character}
      />
      <button type="submit" className="search-btn">
        Search
      </button>
    </form>
  );
}
