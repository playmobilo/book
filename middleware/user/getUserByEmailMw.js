/**
 * Responsible for getting user from database  
 * according to the given e-mail address.
 */
 var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {
  var userModel = requireOption(objectrepository, 'userModel');

    return function (req, res, next) {
        
      if (req.body.email !== 'undefined'){
      

      userModel.findOne({email: req.body.email},
        function (err, result) {
            if ((err) || (!result)) {
                 //return res.redirect('/login');
                 //console.log(err);
             }
             res.locals.pass = result.password;
             console.log("CURRENT PASSWORD:"+ result.password);
            
             return next();
       });
      }
      
    };
  
  };