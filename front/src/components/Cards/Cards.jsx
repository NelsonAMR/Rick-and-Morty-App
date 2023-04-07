import Card from "./Card";
import "./Cards.css";

export default function Cards(props) {
  const { characters } = props;
  return (
    <div className="cards">
      {characters.map((char) => (
        <Card
          key={char.id}
          id={char.id}
          name={char.name}
          species={char.species}
          gender={char.gender}
          origin={char.origin}
          status={char.status}
          image={char.image}
          onClose={props.onClose}
        />
      ))}
    </div>
  );
}
