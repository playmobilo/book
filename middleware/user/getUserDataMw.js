/**
 * Responsible for getting the given user's 
 * all data.
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log("getUserDataMw");
      return next();
    };
  
  };