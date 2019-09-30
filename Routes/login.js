const express = require('express')
const conn = require('../connection')
const Router = express.Router()

Router.use(express.json());
Router.use(express.urlencoded({ extended: true }));

Router.post('/login', (req,res) =>{
    const { username,password } = req.body;
    const getUser = `SELECT * FROM users WHERE username='${username}' AND password='${password}'`;
    conn.query(getUser, (err, results) =>{
        if(err) throw err
        req.session.userID = results[0].user_id;
        res.json(results).status(200);
    });       
});


module.exports = Router