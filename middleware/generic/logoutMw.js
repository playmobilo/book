/**
 * Responsible for logging out the user. 
 *
 */
 module.exports = function (objectrepository) {

    return function (req, res, next) {
      req.session.loggedin = false;
      req.session.username = "";
      req.session.destroy(function(err) {
       console.log("logout error:"+err);
      
        
      })
      return res.redirect("/");
    };
  
  };