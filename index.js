var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('static'));
app.set('view engine', 'ejs');
require('./routes/allroutes')(app);

app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}));


var server = app.listen(3000, function () {
});
console.log("A webszerver a 3000-es porton fut. Érdemes a bejelentkezes.html oldallal kezdeni.");
