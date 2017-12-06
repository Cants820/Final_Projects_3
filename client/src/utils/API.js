import axios from "axios";
var CLIENTIDKEY='IJZTCGP1CODLRRORCAUOBFJC0IL2UXOWCAEYIQJENFJSHGX1';
var CLIENTSECRETKEY='HPTK5IE3INWMX3UCOIGLSOHXLPXDTVZNUNZQNNNE15R4HJFY';
var V ='20161016';


// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  // getRecipes: function(query) {
  //   return axios.get("/api/recipes", { params: { q: query}});
  // },

  getVenuesId: function(param1,param2){
    console.log("p1"+param1)
  	return axios.post("/api/venuesId", {"VENUE_ID": param1, client_id: CLIENTIDKEY, client_secret: CLIENTSECRETKEY, v: V })
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
  	return axios.get("/api/similar", { params: { "near": param1, "categoryId": param2}});
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
