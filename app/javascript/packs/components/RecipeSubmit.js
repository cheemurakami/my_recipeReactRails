import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import { connect } from "react-redux";

export const RecipeSubmit = (props) => {
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
        <Row>
          <Form>
            <Row>
              <Col lg={6} md={6} sm={12} xs={12} className="pr-5">
                <Form.Group>
                  <Form.Label>Recipe title</Form.Label>
                  <Form.Control
                    type="recipe title"
                    placeholder="Enter recipe title"
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Ingredients</Form.Label>
                  <Form.Control
                    type="ingredients"
                    placeholder="1 cup all-purpose flour"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control type="ingredients" placeholder="" />
                </Form.Group>
                <Form.Group>
                  <Form.Control type="ingredients" placeholder="" />
                </Form.Group>
                <Form.Group>
                  <Form.Control type="ingredients" placeholder="" />
                </Form.Group>
              </Col>
              <Col lg={6} md={6} sm={12} xs={12} className="pl-5">
                <Form.Group controlId="exampleForm.SelectCustom">
                  <Form.Label>Number of Servings</Form.Label>
                  <Form.Control as="select" custom>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Directions</Form.Label>
                  <Form.Control
                    type="steps"
                    as="textarea"
                    placeholder="Cut each eggplant into about ½-inch (1-cm) thick round slices."
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control type="steps" as="textarea" placeholder="" />
                </Form.Group>

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

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(RecipeSubmit);
