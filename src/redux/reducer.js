import { DELETE_CARD, DETAIL_CARD, FILTER, ORDER } from "./actions";

const initialState = {
  favorites: [],
  allCharacters: [],
};

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case DETAIL_CARD:
      return {
        ...state,
        favorites: [...state.allCharacters, payload],
        allCharacters: [...state.allCharacters, payload],
      };

    case DELETE_CARD:
      return {
        ...state,
        favorites: state.favorites.filter((fav) => fav.id !== payload),
      };

    case FILTER:
      return {
        ...state,
        favorites: state.allCharacters.filter((char) => {
          if (payload === "all") return [...state.favorites];
          else return char.gender === payload;
        }),
      };

    case ORDER:
      return {
        ...state,
        favorites: [
          ...state.allCharacters.sort((a, b) => {
            if (payload === "ascendente") return a.id - b.id;
            else return b.id - a.id;
          }),
        ],
      };

    default:
      return { ...state };
  }
}

export default rootReducer;
