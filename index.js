var express = require('express');
var app = express();

app.use(express.static('static'));

var server = app.listen(3000, function () {
});
console.log("A webszerver a 3000-es porton fut. Érdemes a bejelentkezes.html oldallal kezdeni.");
