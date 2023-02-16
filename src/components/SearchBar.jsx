import style from "./SearchBar.module.css";
import { useState } from "react";

function SearchBar({ onSearch }) {
  const [character, setCharacater] = useState("");

  // HandleChange toma lo que el usuario ingresa por el input
  const handleChange = (event) => {
    setCharacater(event.target.value);
  };

  return (
    <div className={style.divInput}>
      <input
        type="search"
        value={character}
        onChange={handleChange}
        className={style.input}
      />
      <button className={style.btn} onClick={() => onSearch(character)}>
        Agregar
      </button>
    </div>
  );
}

export default SearchBar;
