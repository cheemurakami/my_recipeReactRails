import * as c from "./types";

export const loadedRecipes = (recipes) => {
  return {
    type: c.LOADED_RECIPES,
    recipes,
  };
};