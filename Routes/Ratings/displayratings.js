const express = require('express')
const conn = require('../../connection')
const Router = express.Router()


Router.get('/:medID', (req,res) =>{
    const med_id = req.params.medID;
    console.log(med_id)
    const getRating = "select AVG(rating) from ratings where med_id ='"+med_id+"' " 
    conn.query(getRating, (err, rows) =>{
        if(err) throw err
        res.send(rows)
        console.log(rows)
    });       
});


module.exports = Router