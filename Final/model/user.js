const Database = require("./database");
var database = new Database();

exports.create = function(name, password) {
    Promise.resolve(database.query("SELECT COUNT(idusers) AS 'count' FROM users")).then(function(value) {
        database.query("INSERT INTO `typericer`.`users` (`idusers`,`username`,`password`,`wpm`,`time`,`accuracy`) VALUES (" + (value[0].count + 1) + ",'" + name + "','" + password + "'," + 0 + "," + 0 + "," + 0 + ")");
    });
}

exports.validate = function(name, password) {
    return database.query("SELECT * FROM users WHERE users.username = '" + name + "' AND users.password = '" + password + "'");
}