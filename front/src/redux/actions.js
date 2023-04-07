//FAVORITES
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

//USERS
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export const loginUser = ({ user, pass }) => {
  return async (dispatch) => {
    try {
      const resp = await fetch(
        `http://localhost:3001/rickandmorty/users?user=${user}&password=${pass}`
      );
      const data = await resp.json();

      dispatch({
        type: LOGIN_USER,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    window.localStorage.setItem("access", JSON.stringify(false));

    dispatch({ type: LOGOUT_USER });
  };
};
