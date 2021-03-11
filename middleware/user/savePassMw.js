/**
 * Responsible for updating user's password.
 */
 var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

  var userModel = requireOption(objectrepository, 'userModel');

  function saveCallback(res, next, pass) {
    pass.save(function (err, result) {
      if (err) {
        console.log("error:");
        console.log(err);
        return next(err);
      }
      console.log("---------------------");
   //   console.log(book);
     return res.redirect("/profile");
     // return next();//res.redirect('/book/' + res.body.bookid);
    });
  }

    return function (req, res, next) {
        if(req.session.user.password === req.body.oldpassword &&
          req.body.newpassword === req.body.newpasswordtwo){

            userModel.findOne({_id: req.session.user._id},
              function (err, result) {
                  if ((err) || (!result)) {
                       return res.redirect('/books/page/' + req.params.bookid);
                   }
              // console.log(req.param.bookid);
            //   console.log(result);
           //    res.locals.bookid = req.params.bookid;
               result.password = req.body.newpassword;
               return saveCallback(res, next, result);
             });

          }

    };
  
  };