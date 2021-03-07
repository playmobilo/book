/**
 * Responsible for saving the new comment. 
 *
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log("saveCommentMW");
      return next();
    };
  
  };