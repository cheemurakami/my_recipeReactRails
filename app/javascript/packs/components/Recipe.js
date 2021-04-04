import { Col, Container, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";
import { ImPinterest2 } from "react-icons/im";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

export const Recipe = ({ currentUser }) => {
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

  const submitOrSignin = () => {
    if (currentUser) {
      return (
        <Link to="/submit" style={{ color: "#e40754" }}>
          Submit your recipe here.
        </Link>
      );
    } else {
      return (
        <Link to="/user_signin" style={{ color: "#e40754" }}>
          Submit your recipe here.
        </Link>
      );
    }
  };

  return (
    <Container>
      <Row className="tip-link mt-5">
        <span>
          <span class="icon-tip">
            <FaRegCommentAlt />
          </span>
          <span class="icon-tip">39 TIPS</span>
        </span>
        <span class="icon-tip">
          <FaRegThumbsUp />
          <span class="icon-tip"> 96% WOULD MAKE AGAIN</span>
        </span>
      </Row>
      <Row>
        <h1>{recipe.name}</h1>
      </Row>
      <Row className="mt-5 mb-3">
        <span className="icon-btn pinterest-logo">
          <ImPinterest2 className="icon-letter" />
        </span>
        <span className="icon-btn facebook-logo">
          <AiOutlineFacebook className="icon-letter" />
        </span>
        <span className="icon-btn email-logo">
          <AiOutlineMail className="icon-letter" />
        </span>
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
        <p>Have a recipe of your own to share? {submitOrSignin()}</p>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.userReducer.user,
  };
};

export default connect(mapStateToProps)(Recipe);
