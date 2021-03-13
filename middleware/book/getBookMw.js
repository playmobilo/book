/**
 * Responsible for getting all the Books from the database 
 *
 */
var requireOption = require('../common').requireOption;
module.exports = function (objectrepository) {

    var bookModel = requireOption(objectrepository, 'bookModel');

    return function (req, res, next) {
      console.log("GetBookMW")
      bookModel.find({},function (err, results) {
        if (err) {
          return next(err);
        }
  
        res.locals.book = results;
        return next();
      });
    };
  
  };