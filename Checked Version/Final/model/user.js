const Database = require("./database");
var database = new Database();

exports.create = function(name, password) {
    Promise.resolve(database.query("SELECT COUNT(idusers) AS 'count' FROM users")).then(function(value) {
        database.query("INSERT INTO `typericer`.`users` (`idusers`,`username`,`password`,`gamesplayed`) VALUES (" + (value[0].count + 1) + ",'" + name + "','" + password + "'," + 0 + ")");

        Promise.resolve(database.query("SELECT COUNT(ideasy) AS 'count' FROM easy")).then(function(easy) {
            database.query("INSERT INTO `typericer`.`easy` (`ideasy`,`idusers`,`wpm`,`time`,`accuracy`) VALUES (" + (easy[0].count + 1) + "," + (value[0].count + 1) + "," + 0 + "," + 0 + "," + 0 + ")");

            Promise.resolve(database.query("SELECT COUNT(idmedium) AS 'count' FROM medium")).then(function(medium) {
                database.query("INSERT INTO `typericer`.`medium` (`idmedium`,`idusers`,`wpm`,`time`,`accuracy`) VALUES (" + (medium[0].count + 1) + "," + (value[0].count + 1) + "," + 0 + "," + 0 + "," + 0 + ")");

                Promise.resolve(database.query("SELECT COUNT(idhard) AS 'count' FROM hard")).then(function(hard) {
                    database.query("INSERT INTO `typericer`.`hard` (`idhard`,`idusers`,`wpm`,`time`,`accuracy`) VALUES (" + (hard[0].count + 1) + "," + (value[0].count + 1) + "," + 0 + "," + 0 + "," + 0 + ")");
                })
            })
        })
    });
}

exports.validate = function(name, password) {
    return database.query("SELECT * FROM users WHERE users.username = '" + name + "' AND users.password = '" + password + "'");
}

exports.getUser = function(name) {
    return database.query("SELECT * FROM users WHERE users.username = '" + name + "'");
}

exports.getEasy = function(name) {
    return database.query("SELECT wpm, time, accuracy FROM users INNER JOIN easy ON easy.idusers = users.idusers WHERE users.username = '" + name + "'");
}

exports.getMedium = function(name) {
    return database.query("SELECT wpm, time, accuracy FROM users INNER JOIN medium ON medium.idusers = users.idusers WHERE users.username = '" + name + "'");
}

exports.getHard = function(name) {
    return database.query("SELECT wpm, time, accuracy FROM users INNER JOIN hard ON hard.idusers = users.idusers WHERE users.username = '" + name + "'");
}
