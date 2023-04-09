import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import * as actions from "../../redux/actions";
import "./Card.css";

export default function Card(props) {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { favorites } = useSelector((state) => state.fav);
  const { user } = useSelector((state) => state.user);
  const [isFav, setIsFav] = useState(false);

  const addFavorite = async (data) => {
    try {
      await fetch("http://localhost:3001/rickandmorty/fav", {
        method: "POST",
        headers: {
          Accept: "application.json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleFav = () => {
    if (pathname === "/favorites") {
      dispatch(actions.deleteCard(props.id));
      setIsFav(false);
    } else {
      if (!isFav) {
        addFavorite({ ...props, user });
        setIsFav(true);
      } else {
        dispatch(actions.deleteCard(props.id));
        setIsFav(false);
      }
    }
  };

  useEffect(() => {
    favorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [favorites, props.id]);

  return (
    <div className="card">
      {pathname !== "/favorites" ? (
        <>
          <button
            className={`card-btn btn-fav ${isFav && "isFav"}`}
            onClick={handleFav}
          >
            &#x2764;
          </button>

          <button
            className="card-btn btn-del"
            onClick={() => props.onClose(props.id)}
          >
            X
          </button>
        </>
      ) : (
        <button
          className={`card-btn btn-fav2 ${isFav && "isFav"}`}
          onClick={handleFav}
        >
          &#x2764;
        </button>
      )}

      <Link to={`/detail/${props.id}`}>
        <img className="card-image" src={props.image} alt={props.name} />
        <div className="card-info">
          <h3>{props.name}</h3>
          <p>{props.species}</p>
          <p>{props.gender}</p>
        </div>
      </Link>
    </div>
  );
}
