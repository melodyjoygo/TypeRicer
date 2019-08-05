const Database = require("../model/database");
var database = new Database();

exports.generate = function() {
    console.log(database.query('SELECT * FROM texts'));
}