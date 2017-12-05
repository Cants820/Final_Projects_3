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

    componentDidMount(){
      console.log(this.props.id)
      API.getVenuesId(this.props.id)
        .then((res) => {
          console.log("in card"+res)
          this.setState({ venues: res.data});
          console.log(this.state.venues)
      })
    }

 
    render (){
      return(
        <div className="card">
          <div className="card-block">
            YAY
          </div>
        </div>
        );
      }
}


export default SavedEvent;