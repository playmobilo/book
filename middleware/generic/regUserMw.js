/**
 * Responsible for adding a new user to the DB. 
 *
 */
 var requireOption = require('../common').requireOption;
module.exports = function (objectrepository) {

  var userModel = requireOption(objectrepository, 'userModel');

 // var strength = require('strength');
  return function (req, res, next) {
    console.log("regUserMw")
    console.log(req.body);
    //not enough parameter
    if ((typeof req.body === 'undefined') || (typeof req.body.email === 'undefined') ||
      (typeof req.body.password === 'undefined') || (typeof req.body.username === 'undefined')) {
      return next();
    }
    res.locals.errors = [];
    //lets find the user
    userModel.findOne({
      email: req.body.email
    }, function (err, result) {

      
      if ((err) || (result !== null)) {
        res.locals.errors.push('Your email address is already registered!');
        console.log(res.locals.errors);
        return next();
      }

      if (req.body.name === 'undefined') {
        res.locals.errors.push('The username should be at least 4 characters!');
        console.log(res.locals.errors);
        return next();
      }

    /*  if (strength(req.body.password) >= 4) {
        res.locals.errors.push('The password is too weak! Please use lower and upper case characters, numbers and special characters!');
        console.log(res.locals.errors);
        return next();
      }*/
      console.log(res.locals.errors);
      //create user
      var newUser = new userModel();
      newUser.username = req.body.username;
      newUser.email = req.body.email;
      newUser.password = req.body.password;
      newUser.save(function (err) {
        //redirect to /login
      return res.redirect('/login');
      });
    });
  };
  
  };