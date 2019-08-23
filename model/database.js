const mysql = require("mysql");

class Database {
    constructor() {
        this.connection = mysql.createConnection({
            host: 'us-cdbr-iron-east-02.cleardb.net',
            user: 'bdb4fa03748e46', 
            port: '3306',
            password: 'fb8acd69',
            database: 'heroku_6ffb3b2162f0bd7'
        });
    }
    async query(sql, args) {
        try {
            return await new Promise((resolve, reject) => {
                this.connection.query(sql, args, (err, rows) => {
                    if (err)
                        return reject(err);
                    resolve(rows);
                });
            });
        } catch (error) { }
    }
    async close() {
        try {
            return await new Promise((resolve, reject ) => {
                this.connection.end(err => {
                    if (err)
                        return reject(err);
    
                    resolve();
                });
            });
        } catch (error) { }
    }
}

module.exports = Database;