/**
 * Responsible for getting all the Books from the database 
 *
 */
 var requireOption = require('../common').requireOption;
 module.exports = function (objectrepository) {
 
     var bookModel = requireOption(objectrepository, 'bookModel');
 
     return function (req, res, next) {
        console.log("getBookByIdMw");
        if (typeof req.query.bookid !== 'undefined'){
            bookModel.findOne({_id:req.query.bookid},
                function (err, result) {
                    if ((err) || (!result)) {
                         return res.redirect('/book/' + req.params.bookid);
                     }
                // console.log(req.param.bookid);
              //   console.log(result);
                 res.locals.bookid = req.params.bookid;
                 res.locals.book = result;
                 return next();
               });
            console.log("getBookByIdMw");
        }
        else{
           // console.log("-----------------------------");
            //console.log(req.params.bookid);
            bookModel.findOne({_id: req.params.bookid},
                function (err, result) {
                    if ((err) || (!result)) {
                         return res.redirect('/book/' + req.params.bookid);
                     }
                // console.log(req.param.bookid);
              //   console.log(result);
                 res.locals.bookid = req.params.bookid;
                 res.locals.book = result;
                 return next();
               });
            //console.log("getBookByIdMw");
        }

    };   
};