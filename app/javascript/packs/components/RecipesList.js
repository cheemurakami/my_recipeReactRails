import * as a from "../rdx/actions";

import React, { useEffect } from "react";

import { connect } from "react-redux";

export const RecipesList = ({ dispatch, recipes }) => {
  useEffect(() => {
    fetch("/api/recipes/")
      .then((resp) => resp.json())
      .then((resp) => dispatch(a.loadedRecipes(resp)));
    return () => {};
  }, []);

  return (
    <>
    <h3>Recipe List</h3>
      {recipes &&
        recipes.map((recipe) => {
          return <p key={recipe.id}>{recipe.name}</p>;
        })}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipesReducer.recipes,
  };
};

export default connect(mapStateToProps)(RecipesList);
