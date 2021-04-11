import { Col, Container, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import * as a from "../rdx/actions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import {
  FaRegThumbsUp,
  FaRegThumbsDown,
  FaRegCommentAlt,
} from "react-icons/fa";
import { ImPinterest2 } from "react-icons/im";
import { AiOutlineFacebook, AiOutlineMail } from "react-icons/ai";
import { Likes } from "./Likes.js";

export const Recipe = ({ currentUser, dispatch, likes }) => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    fetch(`/api/recipes/${id}`)
      .then((resp) => resp.json())
      .then((resp) => setRecipe(resp));
    return () => {};
  }, []);

  useEffect(() => {
    loadLikes();
    return () => {};
  }, []);

  const loadLikes = () => {
    fetch(`/api/recipe_likes/${id}`)
      .then((resp) => (resp.status == 200 ? resp.json() : null))
      .then((resp) => {
        dispatch(a.loadedLikes(resp));
      });
  };
  const showIngredients = (ingredients) => {
    return (
      <ul>
        {ingredients.map((el) => {
          return (
            <li key={el.id}>
              <p>{el.ingredients}</p>
            </li>
          );
        })}
      </ul>
    );
  };

  const showDirections = (directions) => {
    return (
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

  const showThumbsIcons = () => {
    if (currentUser) {
      if (likes) {
        const userLiked = likes.find((key) => key.user_id == currentUser.id);
        if (userLiked) {
          return (
            <span
              onClick={() => unlikeRecipe()}
              className="icon-btn unlike-logo"
            >
              <FaRegThumbsDown className="icon-letter" />
            </span>
          );
        } else {
          return showThumbsup();
        }
      } else {
        return showThumbsup();
      }
    } else {
      return backToSignin();
    }
  };

  const showThumbsup = () => {
    return (
      <span onClick={() => likeRecipe()} className="icon-btn like-logo">
        <FaRegThumbsUp className="icon-letter" />
      </span>
    );
  };

  const backToSignin = () => {
    return (
      <span className="icon-btn like-logo">
        <Link to="/user_signin">
          <FaRegThumbsUp className="icon-letter" />
        </Link>
      </span>
    );
  };

  const likeRecipe = () => {
    const likeData = {
      user_id: currentUser.id,
      recipe_id: id,
    };
    fetch("/api/likes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(likeData),
    }).then(() => loadLikes());
  };

  const unlikeRecipe = () => {
    const likedId = likes.find((key) => key.user_id == currentUser.id).id;
    fetch(`/api/likes/${likedId}`, {
      method: "DELETE",
    }).then(() => loadLikes());
  };

  return (
    <Container>
      <Row className="tip-link mt-5">
        <span>
          <span className="icon-tip">
            <FaRegCommentAlt />
          </span>
          <span className="icon-tip">39 TIPS</span>
        </span>
        <span className="icon-tip">
          <FaRegThumbsUp />
          <span className="icon-tip"> 96% WOULD MAKE AGAIN</span>
        </span>

        {likes ? <Likes likes={likes} /> : null}
      </Row>
      <Row>
        <h1>{recipe.name}</h1>
        {showThumbsIcons()}
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
    likes: state.likesReducer.likes,
  };
};

export default connect(mapStateToProps)(Recipe);
