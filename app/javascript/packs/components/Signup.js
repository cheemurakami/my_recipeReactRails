import React from "react";
import { connect } from "react-redux";
import { Container, Form, Button } from "react-bootstrap";

export const Signup = (props) => {
  const signupSubmission = (e) => {
    e.preventDefault();

    const signupData = {
      email: e.target.email.value,
      password: e.target.password.value,
      password_confirmation: e.target.password_confirmation.value,
    };

    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ user: signupData }),
    })
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp);
      });
  };

  return (
    <Container className="mt-5">
      <Form onSubmit={signupSubmission}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password_confirmation"
          />
        </Form.Group>
        <Button
          style={{
            backgroundColor: "#e40754",
            border: "none",
          }}
          type="submit"
        >
          Sign up
        </Button>
      </Form>
    </Container>
  );
};

export default connect()(Signup);
