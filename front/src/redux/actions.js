import Swal from "sweetalert2";

//FAVORITES
export const DETAIL_CARD = "DETAIL_CARD";
export const DELETE_CARD = "DELETE_CARD";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const CLEAR_FAV = "CLEAR_FAV";

export const detailCard = (user) => {
  return async (dispatch) => {
    try {
      const resp = await fetch(
        `http://localhost:3001/rickandmorty/users/${user}`
      );
      const data = await resp.json();

      const favorites = data[0]?.favorites;

      dispatch({
        type: DETAIL_CARD,
        payload: favorites,
      });
    } catch (error) {
      console.log(error.message);
    }
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

      if (!resp.ok) {
        throw Error(data.error);
      }

      window.localStorage.setItem("access", JSON.stringify(true));

      dispatch({
        type: LOGIN_USER,
        payload: data,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.message,
      });
    }
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    window.localStorage.setItem("user", JSON.stringify(null));
    window.localStorage.setItem("access", JSON.stringify(false));

    dispatch({ type: LOGOUT_USER });
  };
};
