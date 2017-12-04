
import React, { Component } from "react";
import Main from "./pages/Main";
// import Nav from "./components/Nav";
// import Button from "./components/Button";
// import Results from "./components/Results";
// import { AppRegistry, View, Image } from 'react-native';
import AddModal from "./components/AddModal";
import Search from "./components/Search";
// import Search from "./components/Search"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import BurgerNav from'./components/BurgerNav';

class App extends Component { 
  render() {
    return (
       <div>
          <Main />
          <Router>
              <Switch>
                <Route exact path="/" component= {Search} />        
                <Route exact path="/modal" component ={AddModal} />
              </Switch>
          </Router>
        </div>
    );
  }
}

export default App;
