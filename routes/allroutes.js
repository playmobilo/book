var getBookMw = require("../middleware/book/getBookMw");

var getCommentMw = require("../middleware/comment/getCommentMw");
var saveCommentMw = require("../middleware/comment/saveCommentMw");

var authMw = require("../middleware/generic/authMw");
var checkUserLoginMw = require("../middleware/generic/checkUserLoginMw");
var regUserMw = require("../middleware/generic/regUserMw");
var renderMw = require("../middleware/generic/renderMw");
var sendPwMw = require("../middleware/generic/sendPwMw");

var getUserByEmailMw = require("../middleware/user/getUserByEmailMw");
var getUserByUsernameMw = require("../middleware/user/getUserByUsernameMw");
var getUserDataMw = require("../middleware/user/getUserDataMw");
var savePassMw = require("../middleware/user/savePassMw");
var saveUserDataMw = require("../middleware/user/saveUserDataMw");

var userModel = {};

module.exports = function (app) {
  var objectRepository = {
    userModel: userModel,
  };

  /**
   * Main page
   */
   app.get("/", authMw(objectRepository), renderMw(objectRepository, "index"));

  /**
   * Login page
   */
  app.use(
    "/login",
    getUserByUsernameMw(objectRepository),
    checkUserLoginMw(objectRepository),
    renderMw(objectRepository, "login")
  );

  /**
   * Registration
   */
  app.use(
    "/forgottenpass",
    getUserByEmailMw(objectRepository),
    sendPwMw(objectRepository),
    renderMw(objectRepository, "forgottenpass")
  );


  app.use(
    "/registration",
    regUserMw(objectRepository),
    renderMw(objectRepository, "registration")
  );

  app.use(
    "/book/bookid",
    authMw(objectRepository),
    getCommentMw(objectRepository),
    renderMw(objectRepository, "comment")
  );

  app.use(
    "/book/bookid/commentid",
    authMw(objectRepository),
    saveCommentMw(objectRepository),
    renderMw(objectRepository, "comment")
  );

  app.use(
    "/book/bookid/newcomment",
    authMw(objectRepository),
    saveCommentMw(objectRepository),
    renderMw(objectRepository, "comment")
  );

  app.use(
    "/books",
    authMw(objectRepository),
    getBookMw(objectRepository),
    renderMw(objectRepository, "books")
  );

  app.use(
    "/profile",
    authMw(objectRepository),
    getUserDataMw(objectRepository),
    renderMw(objectRepository, "profile")
  );

  app.use(
    "/profile/update/pass",
    authMw(objectRepository),
    savePassMw(objectRepository),
    renderMw(objectRepository, "profile")
  );

  app.use(
    "/profile/update/userdata",
    authMw(objectRepository),
    saveUserDataMw(objectRepository),
    renderMw(objectRepository, "profile")
  );


};
