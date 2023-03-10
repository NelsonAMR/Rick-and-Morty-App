import { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ onSearch }) {
  const [character, setCharacter] = useState("");
  const handleChange = (e) => setCharacter(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(character);
    setCharacter("");
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
