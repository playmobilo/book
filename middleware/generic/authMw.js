/**
 * Responsible for checking if the user is logged in. 
 *
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log("authMw");
      return next();
    };
  
  };