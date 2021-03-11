/*const bookModel = require('./models/book');

let book = new bookModel();

book.title='Lord of the Rings';
book.author='author2';
book.pic_path="../static/img/gyuruk.jpg"
book.comment=null;
book.save((err)=>{
  console.log(err);
});*/

var express = require('express');
var app = express();
const bp = require('body-parser');
var session = require('express-session');
app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));


app.use(express.static('static'));
app.set('view engine', 'ejs');


app.use(bp.urlencoded({ extended: false }))

app.use(session({
  secret: 'keyboard cat'
}));

var server = app.listen(3000, function () {
});
require('./routes/allroutes')(app);

console.log("A webszerver a 3000-es porton fut. Érdemes a bejelentkezes.html oldallal kezdeni.");

