import React from "react";
import { connect } from "react-redux";
import { Container, Form, Button } from "react-bootstrap";

export const Signin = (props) => {
  
  const signinSubmission = (e) => {
    e.preventDefault();
    
    const signinData = { email: e.target.email.value, password: e.target.password.value };

    fetch("/users/sign_in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ user: signinData }),
    }).then((resp) => console.log(resp));
  };

  return (
    <Container>
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
    </Container>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Signin);
