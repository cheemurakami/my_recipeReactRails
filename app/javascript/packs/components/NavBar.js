import React from "react";
import { connect } from "react-redux";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

export const NavBar = ({ currentUser }) => {
  return (
    <>
      <Navbar style={{ backgroundColor: "#79dcf1" }} expand="lg">
        <Navbar.Brand href="/">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>

            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {currentUser && currentUser.email ? (
            <Nav.Link eventKey="disabled" disabled>
              {currentUser.email}
            </Nav.Link>
          ) : (
            <Nav.Link href="/user_signin">Sign in</Nav.Link>
          )}
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success" style={{ color: "#fff" }}>
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.userReducer.user,
  };
};

export default connect(mapStateToProps)(NavBar);
