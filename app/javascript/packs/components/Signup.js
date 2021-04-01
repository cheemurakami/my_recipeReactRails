import React, { useState } from "react";
import { connect } from "react-redux";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import * as a from "../rdx/actions";

export const Signup = ({ currentUser, dispatch }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [errMessages, setErrMessages] = useState({});

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
        if (resp.errors) {
          setErrMessages(resp.errors);
          setShowAlert(true);
        } else {
          dispatch(a.signedinUser(resp));
          return <Redirect to="/" />;
        }
      });
  };

  const showErrMessages = () => {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        {Object.entries(errMessages).map((message, index) => (
          <p key={index}>
            {capitalizeKey(message[0])} {message[1][0]}
          </p>
        ))}
      </Alert>
    );
  };

  const capitalizeKey = (key) => {
    if (key.includes("_")) {
      const keyword = key.replace("_", " ");
      return keyword.charAt(0).toUpperCase() + keyword.slice(1);
    }
    return key.charAt(0).toUpperCase() + key.slice(1);
  };

  const directToHome = () => {
    if (currentUser) {
      return <Redirect to="/" />;
    }
  };

  return (
    <Container className="mt-5">
      {directToHome()}
      {showAlert ? showErrMessages() : null}
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

const mapStateToProps = (state) => {
  return {
    currentUser: state.userReducer.user,
  };
};
export default connect(mapStateToProps)(Signup);
