import React, { Component } from "react";
import API from '../../utils/API';

class Event extends Component {

constructor(props) {
  super(props);
  this.state = props;
}


handleSaveVenue = (event)=>{
  console.log(this.state.venueId)
  API.saveUserVenue(this.state.venueId)
  .then((res) => {
    console.log("got into then")
      console.log(res.data)
    })
}


 
render (){
  return(
    <div className="card">
      <div className="card-block">
        <h3 className="card-title">
        {this.state.name}  
        </h3>
        <a href={this.state.url} target='_blank'>
          <button className='btn btn-default' href={this.state.url}>View Venue</button>
        </a>
        {this.state.saved}
         
        <button className='btn btn-primary' onClick= {this.handleSaveVenue}>Save Venue</button> 
        
        
        
      </div>
    </div>
    );
  }
}

export default Event;