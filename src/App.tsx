import { useState } from "react";

import { Switch, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";

import "./App.css";

const App = () => {
  return (
    <Switch>
      <Route path="/">
        <SignUp />
      </Route>
    </Switch>
  );
};

export default App;
