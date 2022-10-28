const express = require('express');

const path = require('path');

const app = express();

app.set("view engine","ejs");

// app.use('/css', express.static(__dirname + 'public/css'));

// app.use('/js', express.static(__dirname + 'public/js'));

app.use(express.static('public'));

app.get('/', function (req, res) {

   res.render('test');

});

const port = process.env.port || 3000;

app.listen(port, () => console.log('Example app listening $(3000)'));

// console.log('hello world')
