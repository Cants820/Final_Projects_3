import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import Search from "./components/Search";
import Saved from "./components/Saved";
import Recommendation from "./components/Recommendation";

const App = () => 
  
  <Router>
    <div>
    <Jumbotron />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} />
        <Route exact path="/recommendation" component={Recommendation} />
      </Switch>
    </div>
  </Router>;

export default App;
