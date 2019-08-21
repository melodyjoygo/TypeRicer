const mysql = require("mysql");

class Database {
    constructor() {
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'root', 
            port: '3306',
            password: 'mysql2018',
            database: 'typericer'
        });
    }
    async query( sql, args ) {
        try {
            return new Promise((resolve, reject) => {
                this.connection.query(sql, args, (err, rows) => {
                    if (err)
                        return reject(err);
                    resolve(rows);
                });
            });
        }
        catch (e) {
            return error(e);
        }
    }
    close() {
        return new Promise( ( resolve, reject ) => {
            this.connection.end( err => {
                if ( err )
                    return reject( err );

                resolve();
            });
        });
    }
}

module.exports = Database;