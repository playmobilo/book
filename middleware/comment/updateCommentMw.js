/**
 * Responsible for updating the given comment. 
 *
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log("updateCommentMW");
      return next();
    };
  
  };