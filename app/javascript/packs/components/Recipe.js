import { Col, Container, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

export const Recipe = (props) => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  useEffect(() => {
    fetch(`/api/recipes/${id}`)
      .then((resp) => resp.json())
      .then((resp) => setRecipe(resp));
    return () => {};
  }, []);

  const showIngredients = (ingredients) => {
    return (
      <>
        <ul>
          {ingredients.map((el) => {
            return (
              <li key={el.id}>
                <p>{el.ingredients}</p>
              </li>
            );
          })}
        </ul>
      </>
    );
  };

  const showDirections = (directions) => {
    return (
      <>
        <ul>
          {directions.map((el) => {
            return (
              <li key={el.id}>
                <p>
                  {el.index}. {el.description}
                </p>
              </li>
            );
          })}
        </ul>
      </>
    );
  };

  return (
    <Container>
      <Row>
        <h1>{recipe.name}</h1>
      </Row>
      <Row>
        <Col lg={4} md={6} sm={6} xs={12}>
          <h2>Ingredients</h2>
          {recipe.number ? (
            <p className="servings">for {recipe.number} servings</p>
          ) : null}
          {recipe.ingredients && recipe.ingredients.length > 0
            ? showIngredients(recipe.ingredients)
            : null}
        </Col>
        <Col lg={8} md={6} sm={6} xs={12}>
          <h2>Preparation</h2>
          {recipe.directions && recipe.directions.length > 0
            ? showDirections(recipe.directions)
            : null}
        </Col>
      </Row>
      <Row>
        <h4>Submit a recipe</h4>
      </Row>
      <Row>
        <p>
          Have a recipe of your own to share?{" "}
          <Link to="/submit" style={{ color: "#e40754" }}>
            Submit your recipe here.
          </Link>
        </p>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Recipe);
