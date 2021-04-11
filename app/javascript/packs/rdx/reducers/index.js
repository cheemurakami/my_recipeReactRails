import { combineReducers } from "redux";
import recipesReducer from "./recipesReducer";
import userReducer from "./userReducer";
import likesReducer from "./likesReducer";

const rootReducer = combineReducers({
  recipesReducer: recipesReducer,
  userReducer: userReducer,
  likesReducer: likesReducer
});

export default rootReducer;