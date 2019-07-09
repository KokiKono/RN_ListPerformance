var express = require('express');
var csvtojson = require('csvtojson');

var app = express();

app.use('/api/*', function(req, res, next) {
    console.log(req.baseUrl + ' ' + req.method);
    next();
});

app.get('/api/list', function(req, res) {
    csvtojson().fromFile('./test_data/list.csv')
    .then(function(jsonObj) {
        res.json(jsonObj);
    });
});

app.listen('3000', function() {
    console.log('server listen 3000!');
});