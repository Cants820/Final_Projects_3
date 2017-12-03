import React, { Component } from "react";
import "./Main.css";
import { DropdownButton,MenuItem, ButtonGroup, Button, ButtonToolbar} from 'react-bootstrap';
import API from '../../utils/API'

class Main extends Component {

  state = {
    location: "",
    category: "",
    result: [],
    trending: []
  }

  handleInputChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]:value
    });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.searchTrending(this.state.location,this.state.category)
    .then((res) => {
      this.setState({articles: res.data.response.docs})
    })
  }

  render() {

        return (
        <div className="jumbotron text-center background-image">
          <div className='row'>
              <ButtonToolbar className="pull-right">
                  <ButtonGroup>
                    <Button>Sign In</Button>
                    <Button>Login</Button>
                  </ButtonGroup>
              </ButtonToolbar>
                    
          </div>

          <div className='row'>
          <h1><span className="glyphicon glyphicon-education" aria-hidden="true"></span>Tour Guide</h1>
          </div>
            
          <div className='row'>

          <div className='col-sm-4'></div>
            <div className='col-sm-4'>
              <input type="text"
               className="form-control" 
               placeholder="Location"
               aria-describedby="basic-addon1" 
               value={this.state.category} 
               onChange={this.handleInputChange} 
               name="category" /><br/>
              <label>Category:</label>
            <DropdownButton onChange={this.state.handleInputChange} value={this.state.category}>
                <MenuItem eventKey="1" value="restaurant" active>Restaurant</MenuItem>
                <MenuItem eventKey="2" value="museum">Museum</MenuItem>
                <MenuItem eventKey="3" value="Hotels">Hotels</MenuItem>
                <MenuItem eventKey="4" value="Hostels">Hostels</MenuItem>
            </DropdownButton>

              <br/>

              <button className="btn btn-default" onClick={this.state.handleFormSubmit} type="submit">Search</button>
            </div>
           <div className='col-sm-4'>
           </div>

          </div>

        </div>
        // {this.state.result ? (
        //   <Results 
        //   locations = {this.state.result} />) 
        // : 
        //   (<h3>No Results to Display</h3>)}
        // )}

  )}
}
export default Main;
