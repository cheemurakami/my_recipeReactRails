import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import React from "react";
import RecipesList from "./RecipesList";
import { store } from "../rdx/stores";

export const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/">
            <RecipesList />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
