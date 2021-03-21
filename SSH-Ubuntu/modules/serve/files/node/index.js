var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors({origin: true}));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var cookieParser = require('cookie-parser');
app.use(cookieParser());

const main = require('./routes/main');

app.get('/serve/ping', main.Ping);

app.listen(process.env.PORT || 3000,
    () => console.log("Server is running..."));
