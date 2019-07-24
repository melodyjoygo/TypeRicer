var express = require("express"); 
var mysql = require("mysql");
var app = express();

var connection = mysql.createConnection({
    // properties
    host: 'localhost',
    user: 'root', 
    port: '3306',
    password: 'lodi',
    database: 'typericer'
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
    connection.query("SELECT texts FROM texts", function(error, rows, fields){
        //callback
        if(!!error){
            console.log("error in the query");
        }
        else{
            console.log("successful query\n");
            //console.log(rows);
            //parse
            var textArray ;
            textArray =rows;

            console.log(textArray);
        }
    });

});

function addUser(name, wpm, time){

    connection.query("INSERT INTO 'typericer'.'users' ('idusers', 'username', 'wpm','time') VALUES (" + id + "," + name +", "+wpm+"," + time+")", function(error){
        if(!!error){
            console.log("Failed to insert data");
        }
        else{
            console.log("Added to database");
        }
    });
}
app.listen(1337);