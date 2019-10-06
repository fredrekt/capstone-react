const mysql = require('mysql')

var conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'medishop'
}) 
    conn.connect((err)=>{
        if(!err){
            console.log('success')
        }
        else{
            console.log('failed')
        }
    })
module.exports = conn