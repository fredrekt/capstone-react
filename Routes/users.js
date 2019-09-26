const express = require('express');
const mysql = require('../mysql');

usersRouter = express.Router();

usersRouter.use(express.json());
usersRouter.use(express.urlencoded({ extended: true }));

usersRouter.get('/users', (req,res) =>{
    const getUser = `SELECT * FROM medishop_users`;
    mysql.connection.query(getUser, (err, results) =>{
        if(err) throw err
        res.json(results);
        console.log(req.session)
    })
});

usersRouter.get('/isLogined', (req,res) =>{
        res.json(req.session.id);
});

usersRouter.get('/logout', (req,res) =>{
    req.session.destroy((err) =>{
        if(err)throw err;
        console.log('users logout')
    })
});

  
module.exports = usersRouter;