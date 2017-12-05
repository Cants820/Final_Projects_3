const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes/apiRoutes");
const session = require ("express-session");
//var passport = require('./config/passport-setup');

// Serve up static assets
app.use(express.static("client/build"));

//var authRoutes = require("./routes/auth-routes");
//var passportSetup = require("./config/passport-setup");
//var keys = require("./config/keys");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Use apiRoutes
app.use("/api", apiRoutes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/userVenues",
  {
    useMongoClient: true
  }
);

//app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
// passportSetup(passport);
//app.use(passport.initialize()); 
//app.use(passport.session()); // persistent login sessions

//app.use('/auth',authRoutes);

// Send every request to the React app
// Define any API routes before this runs

// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});


