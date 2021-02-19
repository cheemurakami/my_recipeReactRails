import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import React from "react";
import RecipesList from './RecipesList'

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <RecipesList />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
