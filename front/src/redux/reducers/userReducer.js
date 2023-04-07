import { LOGIN_USER } from "../actions";

const initialState = {
  user: "",
  access: false,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER:
      return {
        ...state,
        user: payload.user,
        access: payload.user ? true : false,
      };
    default: {
      return {
        ...state,
        user: (state.user = ""),
        access: (state.access = false),
      };
    }
  }
};

export default userReducer;
