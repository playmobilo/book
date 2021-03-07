/**
 * Responsible for adding a new user to the DB. 
 *
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log("regUserMw");
      return next();
    };
  
  };