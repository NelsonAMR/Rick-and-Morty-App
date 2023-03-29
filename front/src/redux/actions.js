export const DETAIL_CARD = "DETAIL_CARD";
export const DELETE_CARD = "DELETE_CARD";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const CLEAR_FAV = "CLEAR_FAV";

export const detailCard = () => {
  return async (dispatch) => {
    const resp = await fetch("http://localhost:3001/rickandmorty/fav");
    const data = await resp.json();

    dispatch({
      type: DETAIL_CARD,
      payload: data,
    });
  };
  // return async (dispatch) => {
  //   const resp = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  //   const data = await resp.json();

  //   dispatch({
  //     type: DETAIL_CARD,
  //     payload: data,
  //   });
  // };
};

export const deleteCard = (id) => {
  return async (dispatch) => {
    fetch(`http://localhost:3001/rickandmorty/fav/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_CARD,
      payload: id,
    });
  };
};

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (id) => {
  return {
    type: ORDER,
    payload: id,
  };
};

export const clearFav = () => {
  return { type: CLEAR_FAV };
};
