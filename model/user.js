const Database = require("./database");
var database = new Database();

exports.create = function(name, password) {
    Promise.resolve(database.query("SELECT COUNT(idusers) AS 'count' FROM users")).then(function(value) {
        database.query("INSERT INTO users (idusers, username, password, gamesplayed) VALUES ?", [[[(value[0].count + 1), name, password, 0]]])
    })
}

exports.validate = function(name, password) {
    return database.query("SELECT * FROM users WHERE users.username = ? AND users.password = ?", [name, password]);
}

exports.getUser = function(name) {
    return database.query("SELECT * FROM users WHERE users.username = ?", [name]);
}

exports.getEasy = function(name) {
    return database.query("SELECT AVG(wpm) AS wpm, AVG(time) as time, AVG(accuracy) AS accuracy FROM users INNER JOIN easy ON easy.idusers = users.idusers WHERE users.username = ?", [name]);
}

exports.getMedium = function(name) {
    return database.query("SELECT AVG(wpm) AS wpm, AVG(time) as time, AVG(accuracy) AS accuracy FROM users INNER JOIN medium ON medium.idusers = users.idusers WHERE users.username = ?", [name]);
}

exports.getHard = function(name) {
    return database.query("SELECT AVG(wpm) AS wpm, AVG(time) as time, AVG(accuracy) AS accuracy FROM users INNER JOIN hard ON hard.idusers = users.idusers WHERE users.username = ?", [name]);
}

exports.updateGamePlayed = function(idusers) {
    Promise.resolve(database.query("SELECT gamesplayed AS 'count' FROM users WHERE idusers = ?", [idusers])).then(function(value) {
        database.query("UPDATE users SET gamesplayed = ? WHERE idusers = ?", [(value[0].count + 1), idusers]);
    })
}