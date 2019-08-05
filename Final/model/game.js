const Database = require("../model/database");
var database = new Database();

exports.generate = function() {
    return database.query('SELECT * FROM texts').then(rows => {
        return database.close();
    })
}