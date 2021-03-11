/**
 * Responsible for saving the new comment. 
 *
 */

    /*return function (req, res, next) {
      console.log("--------------------------SAVECOMMENT")
      console.log(req.body);
    res.locals.book=req.body.bookid;
    res.redirect("/book/"+res.locals.book);
      return next();
    };
  */


  /*  var commentModel = requireOption(objectrepository, 'commentModel');
    var userModel = requireOption(objectrepository, 'userModel');

    function saveCallback(res, next, comment, book) {
      comment.save(function (err, result) {
        if (err) {
          console.log("error:");
          console.log(err);
          return next(err);
        }
        console.log("---------------------");
        console.log(book);
       return res.redirect("/book/?id="+book._id);
       // return next();//res.redirect('/book/' + res.body.bookid);
      });
    }
  
    return function (req, res, next) {
      res.locals.book = [];
      var book = req.body["book"];
      console.log("IN SAVE COMMENT");
      console.log(req.body["book"]);
      console.log(req.body);
    console.log(req.body.comment);
      if (typeof req.body.comment === 'undefined') {
        res.locals.comments = [];
       return res.redirect("/book/?id="+book._id);
    //    return next();
      }
  
      var comment = undefined;
      if (typeof res.locals.comment !== 'undefined') {
        comment = res.locals.comment;
        comment.content = req.body.comment;
        console.log("content:");
        console.log(comment.content);
        res.locals.comments = [];
        return saveCallback(res, next, comment, book);
      } else {
        comment = new commentModel();
        comment.content = req.body.comment;
        console.log("content11:");
        comment.book = book._id;
        res.locals.book.push(book);
        res.locals.comments = [];
        return saveCallback(res, next, comment, book);
       // comment._task = res.tpl.task;
  
       /* userModel.findById(req.session.userid, function (err, me) {
          comment._user = me;
          return saveCallback(res, next, comment);
        });*/
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
    console.log("saveCommentMW")
    comment = new commentModel();
    comment.content = req.body.comment;
    comment.book = res.locals.bookid;
    comment.author = req.session.user.username;
    return saveCallback(res, next, comment, res.locals.bookid);
 //   return next();
  }

  };