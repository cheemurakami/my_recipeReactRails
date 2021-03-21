import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const RecipeSubmit = () => {
  const [fields, setFields] = useState([""]);

  const submissionHandler = (e) => {
    e.preventDefault();

    const formObject = Object.fromEntries(new FormData(e.target));
    const formArr = Object.entries(formObject);
    const ingredientsArr = formArr.filter((pair) =>
      pair[0].includes("ingredient")
    );
    const ingredientsAttributes = ingredientsArr.map((ingredient) => {
      return {
        ingredients: ingredient[1],
      };
    });
    const recipeData = {
      recipe: {
        name: formObject.title,
        number: formObject.number,
        ingredients_attributes: ingredientsAttributes,
      },
    };
    fetch("/api/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(recipeData),
    }).then((resp) => console.log(resp));
  };

  return (
    <Container>
      <Row className="mt-5">
        <Row>
          <h1>Submit your recipe to Tasty!</h1>
        </Row>
        <Row>
          <p>
            Tasty is looking for new recipes and wants to feature YOURS on the
            Tasty website! Got a recipe that's been passed down in the family? A
            new recipe you came up with?
          </p>
        </Row>
        <Row>
          <p>
            By submitting any content for consideration, you agree to the
            BuzzFeed Materials Release
          </p>
        </Row>
        <Row className="mt-5">
          <Form onSubmit={submissionHandler}>
            <Row>
              <Col
                lg={6}
                md={6}
                sm={12}
                xs={12}
                className="pr-5"
                style={{ justifyContent: "center" }}
              >
                <Form.Group>
                  <Form.Label>Recipe title</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    placeholder="Enter recipe title"
                    style={{ width: 250 }}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.SelectCustom">
                  <Form.Label>Number of Servings</Form.Label>
                  <Form.Control
                    as="select"
                    custom
                    name="number"
                    style={{ width: 250 }}
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Ingredients</Form.Label>

                  {fields.map((_, i) => {
                    return (
                      <Form.Group key={i}>
                        <Form.Control
                          type="text"
                          name={"ingredient" + i}
                          style={{ width: 250 }}
                          placeholder={
                            i == 0 ? "1 cup all-purpose flour" : null
                          }
                        />
                      </Form.Group>
                    );
                  })}
                </Form.Group>
                <Row
                  className="add-ingredients"
                  onClick={() => setFields(fields.concat(""))}
                >
                  <p className="add-ingredients">+ Add more ingredients</p>
                </Row>
              </Col>
              <Col lg={6} md={6} sm={12} xs={12} className="pl-5">
                {/* <Form.Group>
                  <Form.Label>Directions</Form.Label>
                  <Form.Control
                    type="steps"
                    as="textarea"
                    placeholder="Cut each eggplant into about ½-inch (1-cm) thick round slices."
                  />
                </Form.Group>
                <Form.Group> 
                  <Form.Control type="steps" as="textarea" placeholder="" />
                </Form.Group> */}
                <Button
                  style={{ backgroundColor: "#e40754", border: "none" }}
                  color="#e40754"
                  type="submit"
                >
                  Submit
                </Button>
              </Col>{" "}
            </Row>
          </Form>
        </Row>
      </Row>
    </Container>
  );
};

export default RecipeSubmit;
