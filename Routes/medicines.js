const express = require('express');
const mysql = require('../mysql');

medicineRouter = express.Router();

medicineRouter.get('/', (req,res) =>{
    const getMedicine = `SELECT * FROM medishop_data`;
    mysql.connection.query(getMedicine, (err, results) =>{
        if(err) throw err
        res.json(results).status(200);
    });       
});

medicineRouter.get('/selectedMed/:item', (req,res) =>{
    const getMedicine = `SELECT * FROM medishop_data WHERE medicine_name = '${req.params.item}'`;
    mysql.connection.query(getMedicine, (err, results) =>{
        if(err) throw err
        res.json(results).status(200);
    });       
});

  
module.exports = medicineRouter;