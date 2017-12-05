import React, { Component } from "react";
import API from '../../utils/API';
import SavedEvent from '../SavedEvent'

class Saved extends Component{
  state = {
    savedVenues : []
  }

  componentDidMount(){
    console.log("loadVenues")
    API.getUserVenues("5a21c4c871868f1f9cd90959")
    .then(res => {
      console.log("result", res)
      this.setState({savedVenues: res.data})
      })
    .catch(err => console.log(err));
  }

  render() {
    return(
      <div>
        <div className="container">
          <div className="panel panel-primary">
            <div className="panel-heading">
              Saved Venues
            </div>
            <div className="panel-body">
              {
                this.state.savedVenues ? 
                (this.state.savedVenues.map ((venue,index) => (
                  <SavedEvent 
                   
                   // key = {venue._id}
                    key = {index}
                    saved = {true}
                    id ={venue}
                  />
                ))) 
                : (<h3>No Saved Venues</h3>)
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Saved;