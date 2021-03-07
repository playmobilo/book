/**
 * Responsible for getting all the Comments from the database 
 * that belong to the given book
 */

module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log("getCommentMW");
        return next();
    };
  
  };