import { Col, Container, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";

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

  return (
    <Container>
      <Row>
        <h1>{recipe.name}</h1>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Recipe);
