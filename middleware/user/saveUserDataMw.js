/**
 * Responsible for updating user's data.
 */
 var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

  var userModel = requireOption(objectrepository, 'userModel');
  var commentModel = requireOption(objectrepository, 'commentModel');

  function saveCallback(res, next, data) {
    data.save(function (err, result) {
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

    


      userModel.findOne({_id: req.session.user._id},
        function (err, result) {
            if ((err) || (!result)) {
                 return res.redirect('/books/page/' + req.params.bookid);
             }
        // console.log(req.param.bookid);
      //   console.log(result);
     //    res.locals.bookid = req.params.bookid;
     filter={ author: req.session.user.username };
     updateDoc = {$set: {author:req.body.username}};
        
         result.password = req.body.newpassword;
         if (req.body.username !== req.session.user.username){
           result.username=req.body.username;
           commentModel.updateMany(filter, updateDoc,function(err, res) {
            if (err) throw err;
            console.log(res);
           // db.close();
          });
           req.session.user.username = req.body.username;
         }
         if (req.body.email !== req.session.user.email){
          result.email=req.body.email;
          req.session.user.email = req.body.email;
        }
        result.password = req.session.user.password;
         return saveCallback(res, next, result);
       });
        
    };
  
  };