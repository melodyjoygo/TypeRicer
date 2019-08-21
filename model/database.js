const mysql = require("mysql");

class Database {
    constructor() {
        this.connection = mysql.createConnection({
            host: '127.0.0.1',
            user: 'root', 
            port: '3306',
            password: 'mysql2018',
            database: 'typericer'
        });
    }
    async query( sql, args ) {
        return await new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err, rows) => {
                if (err)
                    return reject(err).catch(err);
                resolve(rows);
            });
        }).catch(error);
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