/**
 * Responsible for sending a new password to the user
 * via e-mail.
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
      if (req.body.email === ''){
        res.locals.error = "Please add a valid e-mail address!";
        return next();
      }
      if(req.body.send === 'Send'){
       // console.log("itt");
        res.locals.msg = "The email is sent if it has already registered in our database!";
      }
    //  console.log(req.body);
      //console.log("sendPwMw");
      return next();
    };
  
  };