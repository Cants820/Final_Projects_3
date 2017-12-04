import axios from "axios";



// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  // getRecipes: function(query) {
  //   return axios.get("/api/recipes", { params: { q: query}});
  // },

  getVenuesId: function(param1,param2){
  	return axios.get("/api/venuesId", { params: { "VENUE_ID": param1}});
  },

  searchVenues: function(param1,param2){
  	return axios.get("/api/venues", { params: { "near": param1, "categoryId": param2}});
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
    return axios.get("/users/user_id/venues/" + id);
  },

  deleteUserVenue: function(id) {
    return axios.delete("/users/:user_id/venues/" + id);
  },
  // Saves a venue id to the database no need for bookData
  saveUserVenue: function() {
    return axios.post("/users/:user_id/venues/:id");
  }

};
