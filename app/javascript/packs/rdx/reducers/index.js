import { combineReducers } from "redux";
import recipesReducer from "./recipesReducer";

const rootReducer = combineReducers({
  recipesReducer: recipesReducer
});

export default rootReducer;