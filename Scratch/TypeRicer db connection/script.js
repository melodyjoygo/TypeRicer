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

    connection.query("INSERT INTO 'typericer'.'users' ('idusers', 'username', 'password', 'gamesplayed') VALUES (" + ctr + "," + name +", "+ password + " 0)", function(error){
        if(!!error){
            console.log("Failed to insert data");
        }
        else{
            console.log("Added to database");
        }
    });
}

function getUsers(){
     connection.query("SELECT * FROM users", function(error, rows, fields){
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
}

function getEasy(){
    connection.query("SELECT * FROM easy", function(error, rows, fields){
        //callback
        if(!!error){
            console.log("error in the query");
        }
        else{
            console.log("successful query\n");
            //console.log(rows);
            //parse
            var easyArray ;
            easyArray =rows;
    
            console.log(easyArray);
        }
    });
}

function getMedium(){
    connection.query("SELECT * FROM medium", function(error, rows, fields){
        //callback
        if(!!error){
            console.log("error in the query");
        }
        else{
            console.log("successful query\n");
            //console.log(rows);
            //parse
            var mediumArray ;
            mediumArray =rows;
    
            console.log(mediumArray);
        }
    });
}

function getHard(){
    connection.query("SELECT * FROM hard", function(error, rows, fields){
        //callback
        if(!!error){
            console.log("error in the query");
        }
        else{
            console.log("successful query\n");
            //console.log(rows);
            //parse
            var hardArray ;
            hardArray =rows;
    
            console.log(hardArray);
        }
    });
}

function addEasy(userid, wpm, accuracy, time){

    var check = connection.query("SELECT textid FROM easy WHERE userid = '"+userid+"'") ;
    var ctr = connection.query("SELECT COUNT(ideasy) FROM easy") +1;

    if(check==NULL){
        connection.query("INSERT INTO 'typericer'.'easy' ('ideasy', 'userID', 'wpm','time','accuracy' ) VALUES (" + ctr + ", "+ userid +", "+wpm+"," +accuracy+","+ time+")", function(error){
            if(!!error){
                console.log("Failed to insert data");
            }
            else{
                console.log("Added to database");
            }
        });
    }
    else{
        var curr_wpm = connection.query("SELECT wpm from typericer.easy WHERE idusers =" +userid);
        var curr_time = connection.query("SELECT time from typericer.easy WHERE idusers =" +userid);
        var curr_accuracy = connection.query("SELECT accuracy from typericer.easy WHERE idusers =" +userid);
        
        if(wpm>curr_wpm){
            connection.query("UPDATE 'typericer'.'easy' SET  'wpm'= "+wpm+ " WHERE 'idusers' =" +userid , function(error){
                if(!!error){
                    console.log("Failed to insert data");
                }
                else{
                    console.log("Added to database");
                } 
            }); 
        }
        else if(time< curr_time){
            connection.query("UPDATE 'typericer'.'easy' SET  'time'= "+time+ " WHERE 'idusers' =" +userid , function(error){
                if(!!error){
                    console.log("Failed to insert data");
                }
                else{
                    console.log("Added to database");
                } 
            }); 
        }
        else if(accuracy> curr_accuracy){
            connection.query("UPDATE 'typericer'.'easy' SET  'accuracy'= "+accuracy+ " WHERE 'idusers' =" +userid , function(error){
                if(!!error){
                    console.log("Failed to insert data");
                }
                else{
                    console.log("Added to database");
                } 
            }); 
        }
        else if(accuracy> curr_accuracy && wpm>curr_wpm){
            connection.query("UPDATE 'typericer'.'easy' SET 'wpm' = "+wpm+ "'accuracy'= "+accuracy+  " WHERE 'idusers' =" +userid , function(error){
                if(!!error){
                    console.log("Failed to insert data");
                }
                else{
                    console.log("Added to database");
                } 
            }); 
        }
        else if(accuracy> curr_accuracy && time< curr_time){
            connection.query("UPDATE 'typericer'.'easy' SET 'accuracy'= "+accuracy+  " 'time' =" +time+" WHERE 'idusers' =" +userid , function(error){
                if(!!error){
                    console.log("Failed to insert data");
                }
                else{
                    console.log("Added to database");
                } 
            }); 
        }
        else if(wpm>curr_wpm && time< curr_time){
            connection.query("UPDATE 'typericer'.'easy' SET 'wpm'= "+wpm+  " 'time' =" +time+" WHERE 'idusers' =" +userid , function(error){
                if(!!error){
                    console.log("Failed to insert data");
                }
                else{
                    console.log("Added to database");
                } 
            }); 
        }
        else if(wpm>curr_wpm && time< curr_time && accuracy> curr_accuracy){
            connection.query("UPDATE 'typericer'.'easy' SET 'wpm'= "+wpm+  " 'time' =" +time+"'accuracy' = "+accuracy+ " WHERE 'idusers' =" +userid , function(error){
                if(!!error){
                    console.log("Failed to insert data");
                }
                else{
                    console.log("Added to database");
                } 
            }); 
        }

        

    }
}

function addEasy(userid, wpm, accuracy, time){

    var check = connection.query("SELECT textid FROM easy WHERE userid = '"+userid+"'") ;
    var ctr = connection.query("SELECT COUNT(ideasy) FROM easy") +1;

    if(check==NULL){
        connection.query("INSERT INTO 'typericer'.'easy' ('ideasy', 'userID', 'wpm','time','accuracy' ) VALUES (" + ctr + ", "+ userid +", "+wpm+"," +accuracy+","+ time+")", function(error){
            if(!!error){
                console.log("Failed to insert data");
            }
            else{
                console.log("Added to database");
            }
        });
    }
    else{
        connection.query("UPDATE 'typericer'.'easy' SET  'wpm'= "+wpm+", 'accuracy'="+accuracy +", 'time'="+time+ " WHERE 'idusers' =" +userid , function(error){
            if(!!error){
                console.log("Failed to insert data");
            }
            else{
                console.log("Added to database");
            } 
        }); 
    }
}


/*
function addSession(userid, wpm, accuracy, time){

    var ctr = connection.query("SELECT COUNT(idsessions) FROM sessions") +1;

    connection.query("INSERT INTO 'typericer'.'sessions' ('idsessions', 'userID', 'wpm', 'accuracy','time') VALUES (" + ctr + "," + userid +", "+wpm+"," + +accuracy+","+ time+")", function(error){
        if(!!error){
            console.log("Failed to insert data");
        }
        else{
            console.log("Added to database");
        }
    });
}

function getSessions(){
    connection.query("SELECT * FROM sessions", function(error, rows, fields){
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
}*/

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

function getTextRanks(){
    connection.query("SELECT * FROM text_rank", function(error, rows, fields){
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
}

function updateGamesPlayed(userID){

    var ctr = connection.query("SELECT gamesplayed FROM 'typericer'.'users' WHERE idusers =" +userID) +1;
    connection.query("UPDATE 'typericer'.'users' SET 'gamesplayed'="+ctr+ " WHERE 'idusers' =" +userid , function(error){
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