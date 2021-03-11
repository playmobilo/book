/**
 * Responsible for checking the login credentials
 * are correct or not.
 */
 var requireOption = require('../common').requireOption;
module.exports = function (objectrepository) {

  var userModel = requireOption(objectrepository, 'userModel');

    return function (req, res, next) {
      userModel.findOne({
        username: req.body.username
      }).populate().exec(function (err, results) {
        if (err) {
          res.locals.error = "something bad happened, please try again!";
          return next(err);
        }
  
        res.locals.user = results;
        console.log("\n-----\nfound IN CHECK USER LOGIN:")
        console.log(res.locals.user);
        res.locals.passwordcheck = req.body.password;
      /*  if(results.password === req.body.password){
          req.session.loggedin=true;
          req.session.username=results.username;
          
        }*
        else{
        return next();
        }*/
        if ( res.locals.user !== null && res.locals.user.password === req.body.password){
          req.session.loggedin=true;
          req.session.user=results;
          res.redirect('/');
        }
        else{
          console.log("asd");
          res.locals.error = "Something went wrong, please try again!"

          res.redirect('/login');
        }
      });
    }
  
  };