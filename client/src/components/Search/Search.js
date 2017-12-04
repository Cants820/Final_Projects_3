import React from "react";
import "./Search.css";
import  { Image } from "react-bootstrap";
import API from '../../utils/API';

class Search extends React.Component {

  state = {
    location: "",
    category: "",
    results: [],
    trending: []
  }

  componentDidMount(){
      // trendingLocation();      
    }

  // trendingLocation = () => {
  //   API.searchTrending("San Fransisco", "Restaurant" ).then(res => {
  //       console.log("result", res)
  //       this.setState({trending: res.data})
  //       .catch(err => console.log(err));
  // }

  // handleInputChange = event => {
  //   const { name, value} = event.target;
  //   this.setState({
  //     [name] : value
  //   });
  // }

  // handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   API.searchVenues(this.state.location,this.state.category).then((res) => {
  //     this.setState({results: res.data.response.docs})
  //     console.log('sending back results', res.data.response.venues);
  //   })
  // }

  render() {
     return (
      <div>   
        <h1>Hello World</h1>
      </div>
    )
  }

}

export default Search;
      // <div className="card">
      //     <Image />
      //     <a href={this.state.results.url} target='_blank'>
      //     <div className='overlay'>
      //       <h4><b>{this.state.results.name}</b></h4>
      //       <p>{this.state.results.location.formattedAddress}</p>   
      //       <p>{this.state.results.categories[0].name}</p> 
      //       <p>{this.state.results.stats.checkinsCount}</p>
      //       <p>{this.state.results.popular}</p>
      //       <p>{this.state.results.rating}</p>
            
      //     </div>
      //     </a>
      // </div>
