var db = require('../models');

var router = require('express').Router();
var passport = require('passport');

// auth with google
router.get("/google", passport.authenticate('google',{
  scope: ['profile']
}));

// callback route for google to redirect to

router.get('/google/redirect', passport.authenticate('google',{
  //successRedirect : '/user/4/events',
  successRedirect : '/auth/success',
  failureRedirect : '/google'
}));
  
router.get('/success', (request, response) => {
  console.log('USER ::', request.user)
  console.log(request.session)
  response.send('Success!')
})
// });
module.exports = router;