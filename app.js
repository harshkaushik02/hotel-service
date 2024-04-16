var express = require('express');
//reqring body parser
var bodyParser = require('body-parser');
//this provide base url
const router = require('./controller/controller')


var User = require("./db/config");
var User = require("./db/config");
const app = express();
app.set('view engine','ejs');
app.use( express.static('views'))


const path = require('path');
app.use(express.static(path.join(__dirname, '/upload')))
//this allow our forentend to connect  to server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//creting base url through router
app.use('/', router);







app.listen(1000);