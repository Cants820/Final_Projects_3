import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Button from "./components/Button";
// import API from "./utils/API";
import Results from './components/Results'
// import { AppRegistry, View, Image } from 'react-native';

class App extends Component {
  state = {
    recipes: [],
    recipeSearch: ""
  };

  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Results />


      </div>
    );
  }
}

export default App;
