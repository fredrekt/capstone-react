const express = require('express')
const conn = require('../connection')
const Router = express.Router()

Router.get("/",(req, res)=>{
    conn.query("select * from medicines",(err, rows, fields)=>{
        if(!err){
            console.log('All meds are here')
            //console.log(rows)
            res.send(rows)
        }
        else{
            console.log(err)
        }
    })
})

module.exports = Router