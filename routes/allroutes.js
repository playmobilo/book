var getBookMw = require("../middleware/book/getBookMw");
var getBookByIdMw = require("../middleware/book/getBookByIdMw");

var getCommentMw = require("../middleware/comment/getCommentMw");
var saveCommentMw = require("../middleware/comment/saveCommentMw");
var deleteCommentMw = require("../middleware/comment/deleteCommentMw");
var updateCommentMw = require("../middleware/comment/updateCommentMw");
var getCommentByIdMw = require("../middleware/comment/getCommentByIdMw");


var authMw = require("../middleware/generic/authMw");
var checkUserLoginMw = require("../middleware/generic/checkUserLoginMw");
var regUserMw = require("../middleware/generic/regUserMw");
var renderMw = require("../middleware/generic/renderMw");
var sendPwMw = require("../middleware/generic/sendPwMw");
var logoutMw = require("../middleware/generic/logoutMw");

var getUserByEmailMw = require("../middleware/user/getUserByEmailMw");
var getUserByUsernameMw = require("../middleware/user/getUserByUsernameMw");
var getUserDataMw = require("../middleware/user/getUserDataMw");
var savePassMw = require("../middleware/user/savePassMw");
var saveUserDataMw = require("../middleware/user/saveUserDataMw");

var userModel = {};

var bookModel = require('../models/book');
var commentModel = require('../models/comment');
var userModel = require('../models/user');
module.exports = function (app) {
  var objectRepository = {

    userModel: userModel,
    bookModel: bookModel,
    commentModel: commentModel
  
  };

  /**
   * Main page
   */
 
  
   
  /**
   * Login page
   */
  app.post(
    "/login",
   // getUserByUsernameMw(objectRepository),
    checkUserLoginMw(objectRepository)
   // renderMw(objectRepository, "login")
  );
  app.get(
    "/login",
    renderMw(objectRepository, "login")
  );

  app.get(
    "/logout",
    logoutMw(objectRepository)
  //  renderMw(objectRepository, "login")
  );
  /**
   * Registration
   */
  app.get(
    "/forgottenpass",
    renderMw(objectRepository, "forgottenpass")
  );

  app.post(
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

  app.get(
    "/books/:bookid/edit/:commentid",
    authMw(objectRepository),
    getCommentByIdMw(objectRepository),
   // updateCommentMw(objectRepository),
    renderMw(objectRepository, "edit")
  );
  app.post(
    "/books/:bookid/edit/:commentid",
    authMw(objectRepository),
    updateCommentMw(objectRepository),
    renderMw(objectRepository, "edit")
  );
  app.get(
    "/books/:bookid/delete/:commentid",
    authMw(objectRepository),
    getCommentByIdMw(objectRepository),
    deleteCommentMw(objectRepository),
    renderMw(objectRepository, "comment")
  );

  app.post(
    "/books/newcomment/:bookid",
    authMw(objectRepository),
    getBookByIdMw(objectRepository),
    saveCommentMw(objectRepository),
    getCommentMw(objectRepository),
    renderMw(objectRepository, "newcomment")
  );
  app.use(
    "/books/page/:bookid",
    authMw(objectRepository),
    getBookByIdMw(objectRepository),
    getCommentMw(objectRepository),
    renderMw(objectRepository, "comment")
  );
  app.use(
    "/books/list",
    authMw(objectRepository),
    getBookMw(objectRepository),
    renderMw(objectRepository, "books")
  );

  app.post(
    "/profile/update/pass",
    authMw(objectRepository),
    savePassMw(objectRepository),
    renderMw(objectRepository, "profile")
  );

  app.post(
    "/profile/update/userdata",
    authMw(objectRepository),
    saveUserDataMw(objectRepository),
    renderMw(objectRepository, "profile")
  );

  app.use(
    "/profile",
    authMw(objectRepository),
    getUserDataMw(objectRepository),
    renderMw(objectRepository, "profile")
  );

  app.get("/", authMw(objectRepository), renderMw(objectRepository, "index"));

};
