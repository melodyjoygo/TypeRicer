const express = require("express");
const bodyParser = require("body-parser");
const urlencoder = bodyParser.urlencoded({
    extended: true
})
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");
const session = require("express-session");
const path = require("path");
var app = new express();

app.use(cookieParser());
app.use(urlencoder);
app.use(session({
    resave : true,
    name :"typericer",
    saveUninitialized : true,
    secret : "secretpass",
    cookie : {
        maxAge: 10*60*60*1000
    }
}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(require("./controller"));

app.listen(3000, function() {
    console.log("Server is running at port 3000...");
})