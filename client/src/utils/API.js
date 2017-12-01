import axios from "axios";

export default {

  getVenuesId: function(param1,param2){
    return axios.get("/api/venuesId", { params: { "near": param1, "categoryId": param2}});
  },

  searchVenues: function(paraVem1,param2){
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
    return axios.get("/users/:id/venues" + id);
  },

  deleteUserVenue: function(id) {
    return axios.delete("/users/:user_id/venues/:id" + id);
  },
  // Saves a venue id to the database no need for bookData
  saveUserVenue: function() {
    return axios.post("/users/:user_id/venues/:id");
  },

  // searchVenues: function (venue, category) {

  //   const url = "https://api.foursquare.com/v2/venues/search";
  //   const clientId = 'CEGQALQDZYFZJO04IK5IE1G5HMED5EPPHRKA5MPTBAV53UHV';
  //   const clientSecret = 'XFX52BTLE0XLPF53ISBLGB25NC34PQFE5FCLQIUARLKNS3WN';

  //   return axios.get(url, {
  //     params: {
  //       'near':venue,
  //       'category': category
  //       'client_id': clientId,
  //       'client_secret': clientSecret,
  //       'limit': '5',
  //       'v': '20171130'
  //     }
  //   })

  //   .then(function(response) {
  //     console.log(response);
  //     return response
  //   })
  //   .catch(function(error) {
  //     console.log(error)
  //   })
  // }


};