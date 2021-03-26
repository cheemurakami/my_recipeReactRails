import * as c from "./types";

export const loadedRecipes = (recipes) => {
  return {
    type: c.LOADED_RECIPES,
    recipes,
  };
};
export const signedinUser = (userInfo) => {
  return {
    type: c.SIGNED_IN_USER,
    userInfo,
  };
};