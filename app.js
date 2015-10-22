var express = require('express');
var app = express();

app.set('views', __dirname + '/resources/views');
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/parallax', function (req, res) {
    res.render('parallax');
});

var port = 8080;

var server = app.listen(port, function () {
    console.log('Server started!');
});