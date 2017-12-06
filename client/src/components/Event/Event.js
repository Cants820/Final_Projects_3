import React, { Component } from "react";
import API from '../../utils/API';
import "./Event.css";
import { Image } from "react-bootstrap";

class Event extends Component {

  constructor(props) {
    super(props);
    this.state = {
       ...props
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({...nextProps}) 
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
        <Image src={this.state.photo} />
          <a href={this.state.url} target="_blank">
            <div className="overlay">
              <h1> {this.state.name}  </h1>
      </div>
          </a>
      </div>
    );
  }
}

export default Event;