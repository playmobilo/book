/**
 * Responsible for getting all the Comments from the database 
 * that belong to the given book
 */
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    var commentModel = requireOption(objectrepository, 'commentModel');

    return function (req, res, next) {
 //     console.log("getCommentMw");
   //   console.log(req.body);
     // console.log('\n------------------------------\n'+res.locals.book);
      res.locals.user = req.session.user;
      res.locals.myusername = req.session.user.username;
    //  console.log(req.session.user.username);
    commentModel.find({
      book: res.locals.book
    }).populate().exec(function (err, results) {
      if (err) {
        return next(err);
      }

      res.locals.comments = results;
     
      return next();
    });
  };
  
}

  /**
 * Responsible for saving the new comment. 
 *
 *//*
module.exports = function (objectrepository) {

  return function (req, res, next) {
    res.locals.comments = [];
      console.log("getCommentMW");
    return next();
  };

};*/