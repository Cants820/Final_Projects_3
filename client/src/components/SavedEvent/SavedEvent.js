import React, { Component } from "react";
import API from '../../utils/API';

class SavedEvent extends Component {

    constructor(props) {
      super(props);
      this.state = props;
    }

    state = {    
        venues:{}
    }

    componentWillMount(){
      API.getVenuesId(this.props.venueId)
        .then((res) => {
          this.setState({ venues: res.data.response});
      })
    }

 
    render (){
      return(
        <div className="card">
          <div className="card-block">
            <h3 className="card-title">
            {this.state.venues.name}  
            </h3>
            {this.state.venues.stats.checkinsCount}
     
            <a href={this.state.venues.url} target='_blank'>
              <button className='btn btn-default' href={this.state.url}>View Venue</button>
             </a>
          </div>
        </div>
        );
      }
}


export default SavedEvent;