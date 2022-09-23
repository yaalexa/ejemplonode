import mysql from "promise-mysql";
import config from "./../config";

const connection = mysql.createConnection({
    //heroku_8f897e03cc97c6b?reconnect=true
    
    host: 'us-cdbr-east-06.cleardb.net',
    database: 'heroku_8f897e03cc97c6b',
    user: 'b05b6ecd87490f',
    password: 'd6a6e0c8'
});

const getConnection = () => {
    return connection;
};

module.exports = {
    getConnection
};
