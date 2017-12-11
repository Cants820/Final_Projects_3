import React, { Component } from "react";
import API from '../../utils/API';
import RecEvent from '../RecEvent'

class Recommendation extends Component{
  state = {
    recommendations : []
  }

  componentDidMount(){
    console.log("loadVenues")
    API.getUserVenues("111466030326545450170")
    .then(res => {
      console.log("result", res)
      this.setState({recommendations: res.data})
      })
    .catch(err => console.log(err));
  }

  render() {
    return(
     <div className="container">
      <h1 className='rec-header'>Recommendations</h1>
       <div className="card rec-content">
          <div className="card-header">
            
         </div>
          <div className="card-body">
            {
                this.state.recommendations ?
                (this.state.recommendations.map ((venue,index) => (
                  <RecEvent
                  
                   // key = {venue._id}
                    key = {index}
                    saved = {false}
                    id ={venue}
                  />
                )))
                : (<h3>No recommendation found</h3>)
              }
          </div>
        </div>
      </div>
    );
  }
}

export default Recommendation;