/**
 * Responsible for deleting the given comment. 
 *
 */
 var requireOption = require('../common').requireOption;

 module.exports = function (objectrepository) {

    return function (req, res, next) {
      var commentModel = requireOption(objectrepository, 'commentModel');

        console.log("deleteCommentMW");
        commentModel.deleteOne({_id: req.params.commentid},
          function (err, result) {
              if ((err) || (!result)) {
                   return res.redirect('/books/page/' + req.params.bookid);
               }
          // console.log(req.param.bookid);
        //   console.log(result);
       //    res.locals.bookid = req.params.bookid;
         //  res.locals.comment = result;
           res.redirect("/books/page/"+req.params.bookid);
         //  return next();
         });
      //return next();
    };
  
  };