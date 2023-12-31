const sql = require('mssql');
require('dotenv').config()

const config = {
    user: process.env.MSSQL_USER,
    password: process.env.MSSQL_PASSWORD,
    server: process.env.MSSQL_SERVER,
    database: process.env.MSSQL_DB,
    options: {
        encrypt: false
    }
};

function connect() {
    return sql.connect(config);
};

module.exports = {
    connect,
    sql
};
