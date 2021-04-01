import React from "react";
import { connect } from "react-redux";
import { Container, Form, Button } from "react-bootstrap";
import * as a from "../rdx/actions";
import { Link, Redirect } from "react-router-dom";

export const Signin = ({ dispatch, currentUser }) => {
  const signinSubmission = (e) => {
    e.preventDefault();
    const signinData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    fetch("/users/sign_in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ user: signinData }),
    })
      .then((resp) => resp.json())
      .then((resp) => {
        dispatch(a.signedinUser(resp));
      });
  };

  const directToHome = () => {
    if (currentUser) {
      return <Redirect to="/" />;
    }
  };

  return (
    <Container className="mt-5">
      {directToHome()}
      <Form onSubmit={signinSubmission}>
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
        {/* <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button
          style={{
            backgroundColor: "#e40754",
            border: "none",
          }}
          type="submit"
        >
          Sign in
        </Button>
      </Form>
      <div className="mt-3">
        <p>Don't have an account?</p>
        <Link to="/user_signup">
          <Button
            style={{
              backgroundColor: "#e40754",
              border: "none",
            }}
          >
            Create Account
          </Button>
        </Link>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.userReducer.user,
  };
};
export default connect(mapStateToProps)(Signin);
