export const DETAIL_CARD = "DETAIL_CARD";
export const DELETE_CARD = "DELETE_CARD";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export const detailCard = (id) => {
  return async (dispatch) => {
    const resp = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = await resp.json();

    dispatch({
      type: DETAIL_CARD,
      payload: data,
    });
  };
};

export const deleteCard = (id) => {
  return {
    type: DELETE_CARD,
    payload: id,
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
