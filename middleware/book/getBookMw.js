/**
 * Responsible for getting all the Books from the database 
 *
 */
var requireOption = require('../common').requireOption;
module.exports = function (objectrepository) {

    var bookModel = requireOption(objectrepository, 'bookModel');

    return function (req, res, next) {
      console.log("GetBookMW")
      bookModel.find({
  
      }).populate().exec(function (err, results) {
        if (err) {
          return next(new Error('Error getting books'));
        }
  
        res.locals.book = results;
        return next();
      });
    };
  
  };