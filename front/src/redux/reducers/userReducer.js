import { LOGIN_USER, LOGOUT_USER } from "../actions";

const initialState = {
  // user: "",
  access: JSON.parse(window.localStorage.getItem("access")) || false,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER:
      return {
        ...state,
        // user: payload.user,
        access: payload.user
          ? JSON.parse(window.localStorage.getItem("access"))
          : false,
      };

    case LOGOUT_USER:
      return {
        ...state,
        // user: (state.user = ""),
        access: JSON.parse(window.localStorage.getItem("access")),
      };

    default:
      return {
        ...state,
        // user: (state.user = ""),
        access: JSON.parse(window.localStorage.getItem("access")),
      };
  }
};

export default userReducer;
