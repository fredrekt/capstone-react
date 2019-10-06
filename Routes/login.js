const express = require('express')
const conn = require('../connection')
const Router = express.Router()

Router.use(express.json());
Router.use(express.urlencoded({ extended: true }));

Router.post('/', (req,res) =>{
    const { username,password } = req.body;
    const getUser = `SELECT * FROM users WHERE username='${username}' AND password='${password}'`;
    conn.query(getUser, (err, results) =>{
        if(err) throw err
        req.session.username = results[0].username;
        console.log('this is session:',req.session.username)
        res.json(results).status(200);
    });       
});


module.exports = Router