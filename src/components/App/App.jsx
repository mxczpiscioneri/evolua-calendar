import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Calendar from "../Calendar/Calendar";
import Login from "../Login/Login";
import "./App.css";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" render={() => (<Redirect to="/login" />)} />
      <Route path="/login" component={Login} />
      <Route path="/calendar" component={Calendar} />
    </div>
  </Router>
);

export default App;
