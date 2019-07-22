var express = require("express"); 
var mysql = require("mysql");
var app = express();

var connection = mysql.createConnection({
    // properties
    host: 'localhost',
    user: 'root', 
    port: '3306',
    password: 'lodi',
    database: 'sampledb'
})

connection.connect(function(error){
    //callback
    if(!!error){
        console.log("Error in connecting" + error.message);
    }
    else{
        console.log("connected");
    }
});

app.get("/", function(req,res){
    //about mysql
    connection.query("SELECT * FROM mysampletable", function(error, rows, fields){
        //callback
        if(!!error){
            console.log("error in the query");
        }
        else{
            console.log("successful query\n");
            console.log(rows);
            //parse
        }
    });

});
app.listen(1337);