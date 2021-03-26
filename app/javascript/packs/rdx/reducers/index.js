import { combineReducers } from "redux";
import recipesReducer from "./recipesReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  recipesReducer: recipesReducer,
  userReducer: userReducer
});

export default rootReducer;