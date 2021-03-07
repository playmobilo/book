/**
 * Responsible for getting user from database  
 * according to the given username.
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log("getUserByUsernameMw");
      return next();
    };
  
  };