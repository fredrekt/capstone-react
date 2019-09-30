const express = require('express');
const mysql = require('../mysql');

loginRouter = express.Router();

loginRouter.use(express.json());
loginRouter.use(express.urlencoded({ extended: true }));

loginRouter.post('/login', (req,res) =>{
    const { username,password } = req.body;
    const getUser = `SELECT * FROM medishop_users WHERE username='${username}' AND password='${password}'`;
    mysql.connection.query(getUser, (err, results) =>{
        if(err) throw err
        req.session.userID = results[0].user_id;
        res.json(results).status(200);
    });       
});


module.exports = loginRouter;