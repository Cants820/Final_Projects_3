import React, { Component } from "react";
import API from '../../utils/API';
import Results from '../Results'


class Search extends Component {
  state = {
    location: "",
    category: "",
    venues: []
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.searchVenues(this.state.location, this.state.category)
    .then((res) => {
      this.setState({ venues: res.data.response.venues})
    })
  }

  render() {
    return (
      <div>
      <div className="container">
        <div className="panel panel-primary">
          <div className="panel-heading">
          Search For Places
          </div>
          <div className="panel-body">
            <form> 
            <div className="form-group">
              <label>Location</label>
              <input className="form-control"
                value={this.state.location}
                onChange={this.handleInputChange}
                name="location"
                placeholder="Location"/>
            </div>          
           
            <div className="dropdown-list">
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

              <input className="btn btn-primary"
                onClick={this.handleFormSubmit}
                type="submit">
                Submit
              </input>
            </form>
          </div>
        </div>
      </div>

      {this.state.venues ? ( 
        <Results
        venues = {this.state.venues}
        />
        ):(
        <h3>No Results to Display</h3>
      )}

      </div>
    );
  }
}

export default Search;