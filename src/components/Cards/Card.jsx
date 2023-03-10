import "./Card.css";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.name} />
      <button
        className="card-btn"
        onClick={() => props.onClose(props.id)}
        // data-btn-id={props.id}
      >
        X
      </button>
      <div className="card-info">
        <h3>{props.name}</h3>
        <p>{props.species}</p>
        <p>{props.gender}</p>
      </div>
    </div>
  );
}
