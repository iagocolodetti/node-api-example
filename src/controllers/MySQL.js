const mysql = require('mysql');

let con;
module.exports = {
    connect(host, port, database, user, password) {
        con = mysql.createConnection({
            host,
            port,
            database,
            user,
            password
        });
        con.connect((error) => {
            if (error) {
                throw error;
            } else {
                console.log(`Conexão com '${host}:${port}/${database}' estabelecida`);
            }
        });
    },

    getConnection() {
        return con;
    }
};