import React, { Component } from "react";
import API from '../../utils/API';
import './saved-event.css';



class SavedEvent extends Component {

    constructor(props) {
      super(props);
      this.state = props;
    }

    state = {    
        venues:{}
    }

    componentDidMount(){

      console.log("haha", this.props.id)
      API.getVenuesId(this.props.id)
        .then((res) => {
           console.log("in card2", res.data.response.venue.bestPhoto)
         this.setState({ venues: res.data.response.venue});
          console.log(this.state.venues)
       }).catch(err => console.log(err));
    }

 
    render (){
      return(
        
          <div class="card-content">
              {this.state.venues ? (
                <div>
                  <h4 class="card-title">{this.state.venues.name}</h4>

                  <p class="card-text">{this.state.venues.hereNow.count}</p>
                  <a href={this.state.url} class="btn btn-primary">View</a>
                </div>
            ) :
            (<p> message </p>)
       }
          </div>
  
        );
      }
}


export default SavedEvent;