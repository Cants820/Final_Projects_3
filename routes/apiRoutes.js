const axios = require("axios");
const venuesController = require("../controllers/venuesController");

const router = require("express").Router();

AUTH_TOKEN = {

CLIENTIDKEY:'BRKWXNJL4ZQ4KSQOXFT1LWWTGSYE21SZ4SX2DI2MXY4ZJSTP',
CLIENTSECRETKEY:'NYJLSSQSKF1ACGU1W0Q5HSI0AIJVZCRSBQLE1JXSAVZU50GW',
V:'20171129'

}


router.get("/venuesId", (req, res) => {
  axios
    .get("https://api.foursquare.com/v2/venues/VENUE_ID", { auth:AUTH_TOKEN, params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
   
});
//just for test 
// router.get("/venues", (req, res) => {
//   console.log('testing');
//   res.send("hello");
   
// });


router.get("/venues", (req, res) => {
  axios
    .get("https://api.foursquare.com/v2/venues/search", { auth:AUTH_TOKEN, params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
   
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

    venuesController.findById(req, res);

//   // console.log("ok");
//   .get(console.log("ok"))
//   // .get(venuesController.findById)
//   // .post(venuesController.create)
//   // .put(venuesController.update)
//   //.delete(venuesController.remove);
});


router.post("/users/:user_id/venues/:id", (req, res) => {
   //
   //db.User.findone and update{_id: req.parms.user_id} => get user back
   // push new to the vanue id req.parms.id

   res.send(req.params.user_id);
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
