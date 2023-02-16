import style from "./Card.module.css";

export default function Card({ name, gender, onClose, species, image, id }) {
  return (
    <div className={style.conteiner}>
      <button className={style.btn} onClick={onClose}>
        Ocultar
      </button>
      <Link to={`/detail/${id}`}>
        <h2 className={style.name}>{name}</h2>
      </Link>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <img src={image} alt={name} />
    </div>
  );
}
