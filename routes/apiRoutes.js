const axios = require("axios");

//console.log(db2);
const venuesController = require("../controllers/venuesController");

const router = require("express").Router();

AUTH_TOKEN = {

CLIENTIDKEY:'BRKWXNJL4ZQ4KSQOXFT1LWWTGSYE21SZ4SX2DI2MXY4ZJSTP',
CLIENTSECRETKEY:'NYJLSSQSKF1ACGU1W0Q5HSI0AIJVZCRSBQLE1JXSAVZU50GW',
V:'20171129'

}


router.get("/venuesId", (req, res) => {
  axios.get("https://api.foursquare.com/v2/venues/VENUE_ID", { params: req.query })
    .then(results => res.json(results))
    .catch(err => res.status(422).json(err));
   
});
//just for test 
// router.get("/venues", (req, res) => {
//   console.log('testing');
//   res.send("hello");
   
// });


router.post("/venues", (req, res) => {

  axios.get("https://api.foursquare.com/v2/venues/search", {params: req.body})
    .then(results => {

      res.json(results.data.response.venues)
    }).catch(err => console.log(err));
   
});

router.get("/trending", (req, res) => {
  axios
    .get("https://api.foursquare.com/v2/venues/trending", { auth:AUTH_TOKEN, params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
   
});

router.get("/similar", (req, res) => {
  axios
    .get("https://api.foursquare.com/v2/venues/VENUE_ID/similar", { auth:AUTH_TOKEN, params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
   
});

 router.get("/users/:user_id", (req, res) => {
    
    venuesController.findById(req,res);
    
});

// router.post("/users", (req, res) => {
//     //var db2 = require("../models");
//     //var db2= require("C:\\Users\\mg\\local-project3\\models");
//     venuesController.create(req,res);
//     //res.send({"_id":"mona123"});

// });

router.post("/users/:user_id", (req, res) => {
    //var db2 = require("../models");
    //var db2= require("C:\\Users\\mg\\local-project3\\models");
    venuesController.update(req,res);
    //res.send({"_id":"mona123"});

});

router.post("/savevenues", (req, res) => {
   console.log("YAAAS")

   //res.status(200).json({Ret:true})
   venuesController.update(req,res);
   //step
   
});

router.delete("/users/:user_id/venues/:id", (req, res) => {
//   // console.log("ok");
//   .get(console.log("ok"))
//   // .get(venuesController.findById)
//   // .post(venuesController.create)
//   // .put(venuesController.update)
//   //.delete(venuesController.remove);
});


// router.route("/users/:user_id/venues")
//   .get(venuesController.findAll)
//   //.get(venuesController.findById)
//   //.put(venuesController.update)
//   .delete(venuesController.remove);

module.exports = router;
