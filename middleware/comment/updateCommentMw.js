/**
 * Responsible for updating the given comment. 
 *
 */
 var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

  var commentModel = requireOption(objectrepository, 'commentModel');
  function saveCallback(res, next, comment, bookid) {
    comment.save(function (err, result) {
      if (err) {
        console.log("error:");
        console.log(err);
        return next(err);
      }
      console.log("---------------------");
   //   console.log(book);
     return res.redirect("/books/page/"+bookid);
     // return next();//res.redirect('/book/' + res.body.bookid);
    });
  }
    return function (req, res, next) {
      console.log("UPDATE COMMENT");
      console.log("POST PARAMS:");
      console.log(req.body)
       // console.log("REQ BODY: "+req.body);
       commentModel.findOne({_id: req.params.commentid},
        function (err, result) {
            if ((err) || (!result)) {
                 return res.redirect('/books/' + req.params.bookid);
             }
        // console.log(req.param.bookid);
      //   console.log(result);
     //    res.locals.bookid = req.params.bookid;
         result.content = req.body.editcomment;
         return saveCallback(res, next, result, req.params.bookid);
       });
           

      };
};
  