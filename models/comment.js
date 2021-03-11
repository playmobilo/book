const Schema = require('mongoose').Schema;
const db = require('../config/db.js');

const ObjectId = Schema.ObjectId;

const Comment = db.model ('Comment',{
  author: String,
  content: String,
  book: {
    type: Schema.Types.ObjectId,
    ref: 'Book'
  },
  date: Date
});

module.exports = Comment;