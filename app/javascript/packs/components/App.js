import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import React from "react";
import Recipe from "./Recipe";
import RecipesList from "./RecipesList";
import RecipeSubmit from "./RecipeSubmit";
import { store } from "../rdx/stores";

export const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/recipe/:id">
            <Recipe />
          </Route>
          <Route path="/submit">
            <RecipeSubmit />
          </Route>
          <Route path="/">
            <RecipesList />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
