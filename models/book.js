const Schema = require('mongoose').Schema;
const db = require('../config/db.js');



const Book = db.model ('Book',{
  title: String,
  pic_path: String,
  comment:{
      type: Schema.Types.ObjectId,
      ref: 'Comment'
  }
});

module.exports = Book;