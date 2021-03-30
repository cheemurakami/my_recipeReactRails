import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

export const MyPage = () => {
  const [myRecipes, setMyRecipes] = useState([]);

  useEffect(() => {
    showMyRecipes();
    return () => {};
  }, []);

  const showMyRecipes = () => {
    fetch("/api/user_recipes")
      .then((resp) => resp.json())
      .then((resp) => {
        setMyRecipes(resp);
      });
  };

  return (
    <Container>
      <p>My recipe</p>
      {myRecipes.map((recipe) => {
        return <p key={recipe.id}>{recipe.id}</p>;
      })}
    </Container>
  );
};

export default MyPage;
