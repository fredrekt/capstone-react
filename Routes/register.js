const express = require('express');
const conn = require('../connection')
const Router = express.Router()

Router.use(express.json());
Router.use(express.urlencoded({ extended: true }));

Router.post('/', (req,res) =>{
    const { username,email,password } = req.body;
    const addUser = `INSERT INTO users (username,password,email) VALUES ('${username}', '${password}', '${email}')`;
    conn.query(addUser, (err) =>{
        if(err) throw err
        //console.log("1 record inserted");
    })
   
}); 
  
module.exports = Router; 