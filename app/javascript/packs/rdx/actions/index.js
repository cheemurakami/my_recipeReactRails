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
export const signedOut = () => {
  return {
    type: c.SIGNED_OUT,
  };
};
export const loadedLikes = (likes) => {
  return {
    type: c.LOADED_LIKES,
    likes,
  };
};