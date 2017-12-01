import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
// import Nav from "./components/Nav";
import Button from "./components/Button";
// import API from "./utils/API";
import Results from "./components/Results";
// import { AppRegistry, View, Image } from 'react-native';
import AddModal from "./components/AddModal";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  
  render() {
    return (
       <div>
          <Jumbotron />
          <Router>
              <Switch>
                <Route exact path="/" components= {Search} />
                <Route exact path="/Save" components= {Save} />
                <Route exact path="/Saved-Items" components= {Saved-Items} />
              </Switch>
          </Router>
        </div>
    );
  }
}

export default App;
