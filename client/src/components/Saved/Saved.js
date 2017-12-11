import React, { Component } from "react";
import API from '../../utils/API';
import SavedEvent from '../SavedEvent'

class Saved extends Component{
  state = {
    savedVenues : [],
    //picUrl:""
  }




  componentDidMount(){
    console.log("loadVenues")
    API.getUserVenues("111466030326545450170")
    .then(res => {
      console.log("result", res)
      this.setState({savedVenues: res.data})
      })
    .catch(err => console.log(err));

    //  API.getVenuesPic(this.props.venueId)
    //  .then((data) => {
    //   console.log("I am in saved.js")
    //   this.setState({picUrl:data})
    // })

    
  }

  render() {
    return(
      <div>
        <div className="container">

        <h1 className='save-header'>Saved Event</h1>
             {
                this.state.savedVenues ?
                (this.state.savedVenues.map ((venue,index) => (
                  <SavedEvent
                  
                   // key = {venue._id}
                    key = {index}
                    saved = {true}
                    id ={venue}
                    url={venue.url}
                  />
                )))
                : (<h3>No Saved Venues</h3>)
              }
        </div>
        }
      </div>
    );
  }
}

export default Saved;