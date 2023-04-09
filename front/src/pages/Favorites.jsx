import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Cards/Card";
import * as actions from "../redux/actions";
import "./Favorites.css";

function Favorites({ onClose }) {
  const { favorites } = useSelector((state) => state.fav);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.clearFav());
    dispatch(actions.detailCard(user));
  }, [dispatch, user]);

  const handleSelect1 = (event) => {
    dispatch(actions.orderCards(event.target.value));
  };

  const handleSelect2 = (event) => {
    dispatch(actions.filterCards(event.target.value));
  };

  return (
    <div className="favorites">
      <div className="favorites-select">
        <select name="order" onChange={handleSelect1}>
          <option value="" disabled>
            Order
          </option>
          <option value="descendente">Descendente</option>
          <option value="ascendente">Ascendente</option>
        </select>
        <select name="gender" onChange={handleSelect2}>
          <option value="" disabled>
            Filter
          </option>
          <option value="all">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div className="favorites-cards">
        {favorites.map((char) => (
          <Card
            key={char.id}
            id={char.id}
            name={char.name}
            species={char.species}
            gender={char.gender}
            image={char.image}
            onClose={onClose}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
