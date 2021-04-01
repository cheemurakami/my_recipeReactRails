import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import * as a from "../rdx/actions";
import { connect } from "react-redux";

import React, { useEffect } from "react";
import Recipe from "./Recipe";
import RecipesList from "./RecipesList";
import NavBar from "./NavBar";
import Signin from "./Signin";
import Signup from "./Signup";
import MyPage from "./MyPage";
import RecipeSubmit from "./RecipeSubmit";

export const App = ({ dispatch }) => {
  useEffect(() => {
    fetch("/signed_in")
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp.user == null) {
          return null;
        } else {
          return dispatch(a.signedinUser(resp.user));
        }
      });
    return () => {};
  }, []);

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/recipe/:id">
          <Recipe />
        </Route>
        <Route path="/submit">
          <RecipeSubmit />
        </Route>
        <Route path="/user_signin">
          <Signin />
        </Route>
        <Route path="/user_signup">
          <Signup />
        </Route>
        <Route path="/my_page">
          <MyPage />
        </Route>

        <Route path="/">
          <RecipesList />
        </Route>
      </Switch>
    </Router>
  );
};

export default connect()(App);
