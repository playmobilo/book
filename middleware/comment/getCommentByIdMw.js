/**
 * Responsible for getting all the Books from the database 
 *
 */
 var requireOption = require('../common').requireOption;
 module.exports = function (objectrepository) {
 
     var commentModel = requireOption(objectrepository, 'commentModel');
 
     return function (req, res, next) {
        console.log("getCommentByIdMw");

           // console.log("-----------------------------");
            //console.log(req.params.bookid);
            commentModel.findOne({_id: req.params.commentid},
                function (err, result) {
                    if ((err) || (!result)) {
                         return res.redirect('/books/page/' + req.params.bookid);
                     }
                // console.log(req.param.bookid);
              //   console.log(result);
             //    res.locals.bookid = req.params.bookid;
                 res.locals.comment = result;
                 return next();
               });
            //console.log("getBookByIdMw");
        

    };   
};