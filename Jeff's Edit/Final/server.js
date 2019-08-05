const express = require("express");
const path = require("path");
var app = new express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(require("./controller"));

app.listen(3000, function() {
    console.log("Server is running at port 3000...");
})