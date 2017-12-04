import React, { Component } from "react";
import "./Main.css";
import { DropdownButton,MenuItem, ButtonGroup, Button, ButtonToolbar} from 'react-bootstrap';
import API from '../../utils/API';
import SearchResults from '../../components/SearchResults';

class Main extends Component {
  state = {
    location: "",
    category: "",
    venue: [],
  }
  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]:value
    });
  }
  handleFormSubmit = (event) => {
    event.preventDefault();
    API.searchVenues(this.state.location,this.state.category)
    .then((res) => {
       console.log(res.data.response);
       console.log(this.state.location, this.state.category);
      this.setState({venue: res.data.response.venue})
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
              <input
               className="form-control locationTextbox" 
               placeholder="Location"
               onChange={this.handleInputChange} 
               name="location"
               type="text"
                />

            <div>
              <label>
              Please select a category:
                <select value={this.state.value} onChange={this.handleInputChange} name="category">
                  <option value="4d4b7104d754a06370d81259">Arts & Entertainment</option>
                  <option value="4deefb944765f83613cdba6e">Historic Site</option>
                  <option value="4bf58dd8d48988d17f941735">Movie Theater</option>
                  <option value="4bf58dd8d48988d181941735">Museum</option>
                  <option value="4bf58dd8d48988d1e5931735">Music Venue</option>
                  <option value="4bf58dd8d48988d1f2931735">Performing Arts Venue</option>
                  <option value="507c8c4091d498d9fc8c67a9">Public Art</option>
                  <option value="4bf58dd8d48988d184941735">Stadium</option>
                  <option value="4bf58dd8d48988d182941735">Theme Park</option>
                  <option value="56aa371be4b08b9a8d573520">Tour Provider</option>
                  <option value="4bf58dd8d48988d17b941735">Zoo</option>
                  <option value="4d4b7105d754a06372d81259">College & University</option>
                  <option value="4d4b7105d754a06373d81259">Event</option>
                  <option value="4d4b7105d754a06376d81259">Nightlife Spot</option>
                  <option value="4d4b7105d754a06377d81259">Outdoors & Recreation</option>                    
                </select>
              </label>
            </div>
          <button className="btn btn-default" onClick={this.handleFormSubmit} type="submit">Search</button>
            </div>
         <div className='col-sm-4'>
          </div>

          </div>
          <div>
               {this.state.venue ? (
                <SearchResults 
                venue = {this.state.venue} />) 
              : 
                (<h3>No Results to Display</h3>)}
              )}
          </div>
          
      </div>
  )}
}

export default Main;