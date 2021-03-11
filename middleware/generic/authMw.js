/**
 * Responsible for checking if the user is logged in. 
 *
 */
 var requireOption = require('../common').requireOption;
module.exports = function (objectrepository) {
  var userModel = requireOption(objectrepository, 'userModel');
  
  return function (req, res, next) {
    console.log("authMw");
      
    if(req.session.loggedin !== true ||
          req.session === 'undefined'){
            
            res.redirect('/login');

          }
      else{
     //   console.log("\n--------------------------------\nUSER\n"+req.session.user);
        return next();
      }
    };

  
  };