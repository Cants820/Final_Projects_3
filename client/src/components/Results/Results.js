import React from "react";
import "./Results.css";
import  { Image } from 'react-bootstrap';


class Results extends Component.React => (

    constructor(props) {
        super(props);
    }
    

      
    render() {
      return <div>
      <div className="card">
          <Image src='http://via.placeholder.com/200x200'/>
          <a href='http://google.com' target='_blank'>
          <div className='overlay'>
            <h4><b>Insert Title</b></h4> 
            <p>Insert Description</p> 
          </div>
          </a>
      </div>

      <div className="card">
       <Image src='http://via.placeholder.com/200x200'/>
        <a href='http://google.com' target='_blank'>
        <div className='overlay'>
          <h4><b>Insert Title</b></h4> 
          <p>Insert Description</p> 
        </div>
        </a>
      </div>
    
       <div className="card">
       <Image src='http://via.placeholder.com/200x200'/>
        <a href='http://google.com' target='_blank'>
        <div className='overlay'>
          <h4><b>Insert Title</b></h4> 
          <p>Insert Description</p> 
        </div>
        </a>
      </div>
    </div>
}

);

export default Results;
