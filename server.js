'use strict';

const express = require('express');
const fs = require('fs');

var app = express();

let options = {
    root: __dirname
};

app.use(express.static('dist'));

app.get('/', function(req, res){
    res.sendFile('dist/index.html', options);
});


app.listen(process.env.PORT || 5000);
