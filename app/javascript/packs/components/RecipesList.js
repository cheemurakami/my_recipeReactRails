import * as a from "../rdx/actions";

import React, { useEffect } from "react";

import { connect } from 'react-redux'

export const RecipesList = ({dispatch}) => {

  useEffect(() => {
    fetch("/api/recipes/")
      .then((resp) => resp.json())
      .then((resp) => a.loadedRecipes(resp))
    return () => {};
  }, []);
  return (
    <h2>
      Recipe List
    </h2>
  );
};

const mapStateToProps = (state) => {
  return{
    recipes: state.recipesReducer.recipes
  }
}

export default connect(mapStateToProps)(RecipesList)