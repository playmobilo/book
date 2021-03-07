/**
 * Responsible for checking the login credentials
 * are correct or not.
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log("checkUserLoginMw");
      return next();
    };
  
  };