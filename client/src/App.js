import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import Search from "./components/Search";
import Saved from "./components/Saved";

const App = () => 
  
  <Router>
    <div>
    <Jumbotron />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </Switch>
    </div>
  </Router>;

export default App;
