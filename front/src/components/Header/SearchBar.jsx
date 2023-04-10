import { useEffect } from "react";
import "./SearchBar.css";

export default function SearchBar({ setSearch, setPage }) {
  const handleChange = (e) => {
    setPage(1);
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // pathname !== "/home" && navigate("/home");
  };

  useEffect(() => {
    setSearch("");
  }, [setSearch]);

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        onChange={handleChange}
        // value={character}
      />
      <button type="submit" className="search-btn">
        Search
      </button>
    </form>
  );
}
