const express = require('express')
const conn = require('../connection')
const Router = express.Router()

Router.get("/",(req, res)=>{
    const sortQry = "select distinct(category) from medicines"
    conn.query(sortQry,(err, rows, fields)=>{
        if(!err){
            console.log('Sorted A to Z!')
            res.send(rows)
        }
        else{
            console.log(err)
        }
    })
})

module.exports = Router