const express = require('express')
const conn = require('../connection')
const Router = express.Router()

Router.use(express.json());
Router.use(express.urlencoded({ extended: true }));

Router.get('/', (req,res) =>{
    const getUser = `SELECT * FROM users`;
    conn.query(getUser, (err, results) =>{
        if(err) throw err
        res.json(results);
        console.log(req.session)
    })
});

Router.get('/isLogined', (req,res) =>{
        res.json(req.session.id);
});

Router.get('/logout', (req,res) =>{
    req.session.destroy((err) =>{
        if(err)throw err;
        console.log('users logout')
    })
});

  
module.exports = Router