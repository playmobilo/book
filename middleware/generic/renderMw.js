/**
 * Responsible for rendering the HTML pages.
 *
 */
module.exports = function (objectrepository,viewName) {

    return function (req, res, next) {
        console.log("renderMw");
        res.render(viewName);
      return next();
    };
  
  };