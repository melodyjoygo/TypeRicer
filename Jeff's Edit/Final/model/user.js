const connection = require("./database");

exports.create = function(name, password) {
    var ctr;
    connection.query("SELECT COUNT(idusers) AS 'count' FROM users", function(err, result, field) {
        if(err) {
            console.log(err.message);
        } else {
            ctr = result[0].count + 1;
            
            connection.query("INSERT INTO `typericer`.`users` (`idusers`,`username`,`password`,`wpm`,`time`,`accuracy`) VALUES (" + ctr + ",'" + name + "','" + password + "'," + 0 + "," + 0 + "," + 0 + ")", function(error) {
                if(error) {
                    console.log(error.message);
                }
                else {
                    console.log("Added to database");
                }
            });
        }
    });
}

exports.validate = function(name, password) {
    connection.query("SELECT * FROM users WHERE users.username = '" + name + "' AND users.password = '" + password + "'", function(error, rows, fields) {
        if(error) {
            console.log("error in the query");
        }
        else {
            console.log("successful query\n");
        }
        if(rows == '') {
            console.log(rows);
            return false;
        } else {
            console.log(rows);
            return true;
        }
    });
}