import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Detail from "./components/Detail";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con esa ID");
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  return (
    <div
      className="App"
      style={{
        padding: "25px",
        backgroundImage: `url(https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/11/planeta-tierra-2873795.jpg?tf=3840x)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Nav onSearch={onSearch} />
      <Routes>
        <Route
          path="home"
          element={<Cards onClose={onClose} characters={characters} />}
        />
        <Route path="about" element={<About />} />
        <Route path="detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
