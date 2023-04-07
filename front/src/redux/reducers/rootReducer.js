import { combineReducers } from "redux";
import favReducer from "./favReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  fav: favReducer,
});

export default rootReducer;
