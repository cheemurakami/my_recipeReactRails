import React, { useEffect } from "react";

export const RecipesList = () => {

  useEffect(() => {
    fetch("/api/recipes/")
      .then((resp) => resp.json())
      .then((resp) => console.log(resp))
    return () => {};
  }, []);
  return (
    <h2>
      Recipe List
    </h2>
  );
};

export default RecipesList;
