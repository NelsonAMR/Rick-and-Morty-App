import { LOGIN_USER, LOGOUT_USER } from "../actions";

const initialState = {
  user: JSON.parse(window.localStorage.getItem("user")) || null,
  access: JSON.parse(window.localStorage.getItem("access")) || false,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER:
      return {
        ...state,
        user: JSON.parse(window.localStorage.getItem("user")),
        access: payload.user
          ? JSON.parse(window.localStorage.getItem("access"))
          : false,
      };

    case LOGOUT_USER:
      return {
        ...state,
        user: JSON.parse(window.localStorage.getItem("user")),
        access: JSON.parse(window.localStorage.getItem("access")),
      };

    default:
      return {
        ...state,
        user: JSON.parse(window.localStorage.getItem("user")),
        access: JSON.parse(window.localStorage.getItem("access")),
      };
  }
};

export default userReducer;
