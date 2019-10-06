const express = require('express');
const conn = require('../connection')

Router = express.Router();

Router.get('/', (req,res) =>{
    const getMedicine = `SELECT * FROM medicines`;
    conn.query(getMedicine, (err, results) =>{
        if(err) throw err
        res.json(results).status(200);
    });       
});

Router.get('/selectedMed/:item', (req,res) =>{
    const getMedicine = `SELECT * FROM medicines WHERE name = '${req.params.item}'`;
    conn.query(getMedicine, (err, results) =>{
        if(err) throw err
        res.json(results).status(200);
    });       
});

  
module.exports = Router;