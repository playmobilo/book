/**
 * Responsible for getting all the Books from the database 
 *
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log("getBookMW");
        return next();
    };
  
  };