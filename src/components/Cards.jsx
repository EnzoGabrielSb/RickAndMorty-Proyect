import Card from "./Card";
import style from "./Cards.module.css";

function Cards({ characters, onClose }) {
  // [ {...}, {...} ]

  return (
    <div className={style.conteiner}>
      {characters.map((character) => {
        return (
          <Card
            key={character.id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            id={character.id}
            onClose={() => onClose(character.id)}
          />
        );
      })}
    </div>
  );
}

export default Cards;
