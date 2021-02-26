import * as a from "../rdx/actions";

import { Col, Container, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

export const RecipesList = ({ dispatch, recipes }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/api/recipes/")
      .then((resp) => resp.json())
      .then((resp) => {
        dispatch(a.loadedRecipes(resp));
        setLoading(false);
      });
    return () => {};
  }, []);

  if (loading) {
    return (
      <Container>
        <div className="trending-header">Loading...</div>
      </Container>
    );
  } else {
    return (
      <Container>
        <div className="trending-header">Trending Recipes</div>
        <Row>
          {recipes &&
            recipes.map((recipe) => {
              return (
                <Col lg={3} md={4} sm={6} xs={12} key={recipe.id}>
                  <Link to={`/recipe/${recipe.id}`}>
                    <div className="recipe-container">
                      <img
                        className="recipe-list-img"
                        src="https://img.buzzfeed.com/video-api-prod/assets/7841a26fa9764c2dbb34c845fb5f1f9c/BFV27602_MicrowaveCheesecake-ThumbA1080.jpg?resize=300:*&output-format=jpg&output-quality=auto"
                      />
                      <p>{recipe.name}</p>
                    </div>
                  </Link>
                </Col>
              );
            })}
        </Row>
      </Container>
    );
  }
};

const mapStateToProps = (state) => {
  console.log(state.recipesReducer.recipes);
  return {
    recipes: state.recipesReducer.recipes,
  };
};

export default connect(mapStateToProps)(RecipesList);
