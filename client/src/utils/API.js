import axios from "axios";
//var CLIENTIDKEY='BRKWXNJL4ZQ4KSQOXFT1LWWTGSYE21SZ4SX2DI2MXY4ZJSTP';
//var CLIENTSECRETKEY='NYJLSSQSKF1ACGU1W0Q5HSI0AIJVZCRSBQLE1JXSAVZU50GW';
var CLIENTIDKEY ='RYH0B5SI4MPYO5CGE01PVILQICU3SC0WN5VIZ0REYHTGVBGH';
var CLIENTSECRETKEY='JN3IDX441GKEQZO4IHSU4YP4QEOEQKYE4VD2UP03V0PPJKR3';

var V ='20171129';


// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  // getRecipes: function(query) {
  //   return axios.get("/api/recipes", { params: { q: query}});
  // },

  getVenuesId: function(param1,param2){
    console.log("p1"+param1)
    //api/venuesId=
  	return axios.get("https://api.foursquare.com/v2/venues/"+param1 , {params:{client_id: CLIENTIDKEY, client_secret: CLIENTSECRETKEY, v: V }})
    .then(function(data){
      return data
    });
  },

  searchVenues: function(param1,param2){
  	return axios.post("/api/venues", {  "near": param1, "categoryId": param2, client_id: CLIENTIDKEY, client_secret: CLIENTSECRETKEY, v: V })
    .then(function(data){
      return data
    });
  },

  searchTrending: function(param1,param2){
  	return axios.get("/api/trending", { params: { "near": param1, "categoryId": param2}});
  },
  
  // pass the current venues_id
  searchSimilarVenues: function(param1,param2){
  	return axios.get("https://api.foursquare.com/v2/venues/"+param1+"/similar/", { params:{client_id: CLIENTIDKEY, client_secret: CLIENTSECRETKEY, v: V}});
  },
  //can I pass the array of venues Ids
  getUserVenues: function(id) {
    console.log("IN")
    return axios.post("/api/uservenues/", {userId:id})
    .then(function(data){
      console.log("APIJS"+data)
      return data
  });
  },

  deleteUserVenue: function(id) {
    return axios.delete("/api/users/:user_id/venues/" + id);
  },
  // Saves a venue id to the database no need for bookData
  saveUserVenue: function(venueId) {

    return axios.post("/api/savevenues/" , {saveitems: venueId})
    .then(function(data){
      console.log(data)
      return data
    });
  }

};
