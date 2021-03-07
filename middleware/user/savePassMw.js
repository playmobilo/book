/**
 * Responsible for updating user's password.
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log("savePassMw");
      return next();
    };
  
  };