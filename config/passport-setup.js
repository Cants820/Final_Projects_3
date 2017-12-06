var GoogleStrategy = require('passport-google-oauth20');
var keys = require("./keys");
var db = require("../models/index.js");
var User = require("../models/user.js");
var passport = require('passport');
// var newUser;



passport.use(
  new GoogleStrategy(
    {
       //options for the google strategy
       callbackURL : '/auth/google/redirect',
       clientID: keys.google.clientID,
       clientSecret: keys.google.clientSecret 
     },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({googleId: profile.id})
        .then((currentUser)=>{
          if (currentUser){
            done(null, currentUser)
          } else{
            new User({
              username: profile.displayName,
              googleId : profile.id,
            })
            .save()
            .then((newUser)=>{
              console.log("new User created" + newUser);
              return done(null, newUser)
            })
          }
        })
    }
  )
)  

passport.serializeUser(function(user, done) {
  done(null, user.id)
})
passport.deserializeUser(function(id, done) {
      User.findById(id).then(function(user){
      done(null, user)

    })
  // console.log('deserialize :: ', id)
  // User.findOne({googleId: '110609739618014881284'})
  //   .then((error, user) => {
  //     console.log('USER in deserialize :', user)
  //       done(null, user)
  // })
}) 
      // new User({
      //   username: profile.username,
      //   googleId : profile.id
      // }).save()
        // .then((newUser)=>{
      //   console.log("new User created" + newUser);
      // })
      // })
      // 

module.exports = passport


    // process.nextTick(function(){
    //   console.log(profile.id)
    //   User.find({name: profile.displayName}).then(function(queryUser){
    //     if(queryUser){
    //         console.log('queryUser: ', queryUser);
    //       // return done(null,queryUser);
    //     } else {
    //       User.create({
    //         name: profile.displayName,
    //         // googleID : profile.id
    //       }).then(function(newUser){
    //           console.log('newUser: ', newUser);
    //         return done(null,newUser);
    //       })
    //     }

    //   })
    // })


     

