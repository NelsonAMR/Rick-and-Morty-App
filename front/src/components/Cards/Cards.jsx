import Card from "./Card";
import "./Cards.css";

export default function Cards({ characters }) {
  return (
    <div className="cards">
      {characters.map((char) => (
        <Card
          key={char.id}
          id={char.id}
          name={char.name}
          species={char.species}
          gender={char.gender}
          origin={char.origin?.name}
          status={char.status}
          image={char.image}
        />
      ))}
    </div>
  );
}
