import * as a from "../rdx/actions";

import { Col, Container, Row } from "react-bootstrap";
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
    <Container>
      <h3>Trending Recipes</h3>
      <Row>
        {recipes &&
          recipes.map((recipe) => {
            return (
              <Col lg={3} md={4} sm={6} xs={12}>
                <p key={recipe.id}>{recipe.name}</p>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  console.log(state.recipesReducer.recipes);
  return {
    recipes: state.recipesReducer.recipes,
  };
};

export default connect(mapStateToProps)(RecipesList);
