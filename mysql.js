const mysql = require('mysql');
const session = require('express-session');
const MYSQLstore = require('express-mysql-session')(session);

const options ={
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '8546',
    database: 'medishopdb'
};

const connection = mysql.createConnection(options);
const sessionStore = new MYSQLstore({options} , connection);
connection.connect((err)=>{
    if(err) throw err
    console.log('MYSQL connected');
});
 
module.exports = {connection, sessionStore};