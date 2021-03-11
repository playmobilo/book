/**
 * Responsible for getting user from database  
 * according to the given username.
 */
 var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

  
  var userModel = requireOption(objectrepository, 'userModel');
   
  return function (req, res, next) {
     
    userModel.findOne({_id: req.session.user._id},
      function (err, result) {
          if ((err) || (!result)) {
               return res.redirect('/books/' + req.params.bookid);
           }
      // console.log(req.param.bookid);
    //   console.log(result);
   //    res.locals.bookid = req.params.bookid;
       res.locals.user = result;
       console.log(result);
       console.log(result.username);
       return next();
     });
    };
  
  };