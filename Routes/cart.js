const express = require('express');
const mysql = require('../mysql');

cartRouter = express.Router();

cartRouter.use(express.json());
cartRouter.use(express.urlencoded({ extended: true }));

cartRouter.get('/', (req,res) =>{
    const getUser = `SELECT * FROM medishop_users`;
    mysql.connection.query(getUser, (err, results) =>{
        if(err) throw err
        res.json(results);
        console.log(req.session)
    })
});

  
module.exports = cartRouter;