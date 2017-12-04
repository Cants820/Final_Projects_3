import React, { Component } from 'react';
import Main from '../../pages/Main';
import { Image } from 'react-bootstrap';

class SearchResults extends Component {

  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    return (
      <div>
          <div className="card">
          <Image src="http://via.placeholder.com/350x350" />
          <a href={this.state.venue.url} target='_blank'>
          <div className='overlay'>
            <h4><b>{this.state.venue.name}</b></h4>
            
        
      
            <p>{this.state.venue.popular}</p>
            <p>{this.state.venue.rating}</p>
            
          </div>
          </a>
      </div>
       </div>
    )
  }

}

export default SearchResults;