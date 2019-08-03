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

function addUser(name,password, wpm, time){

    var ctr = connection.query("SELECT COUNT(idusers) FROM users")+1 ;

    connection.query("INSERT INTO 'typericer'.'users' ('idusers', 'username', 'password','wpm','time') VALUES (" + ctr + "," + name +", "+ password +","+wpm+"," + time + ")", function(error){
        if(!!error){
            console.log("Failed to insert data");
        }
        else{
            console.log("Added to database");
        }
    });
}

function addSession(userid, wpm, time){

    var ctr = connection.query("SELECT COUNT(idsessions) FROM sessions") +1;

    connection.query("INSERT INTO 'typericer'.'sessions' ('idsessions', 'userID', 'wpm','time') VALUES (" + ctr + "," + userid +", "+wpm+"," + time+")", function(error){
        if(!!error){
            console.log("Failed to insert data");
        }
        else{
            console.log("Added to database");
        }
    });
}

function addTextRank(textid, userid, wpm, accuracy, time){

    var check = connection.query("SELECT textid FROM text_rank WHERE userid = '"+userid+"'") ;
    var ctr = connection.query("SELECT COUNT(idtext_rank) FROM text_rank") +1;

    if(check==NULL){
        connection.query("INSERT INTO 'typericer'.'text_rank' ('idtext_rank', 'textID','userID', 'wpm','accuracy', 'time') VALUES (" + ctr + ","+ textid +", "+ userid +", "+wpm+"," +accuracy+","+ time+")", function(error){
            if(!!error){
                console.log("Failed to insert data");
            }
            else{
                console.log("Added to database");
            }
        });
    }
    else{
        connection.query("UPDATE 'typericer'.'text_rank' SET 'idtext_rank' =" + ctr + ", 'textID' = "+ textid+", 'userID ' = " + userid +" 'wpm'= "+wpm+", 'accuracy'="+accuracy +", 'time'="+time+ " WHERE 'userID' =" +userid , function(error){
            if(!!error){
                console.log("Failed to insert data");
            }
            else{
                console.log("Added to database");
            } 
        }); 
    }



    
}


app.listen(1337);