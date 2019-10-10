const express = require('express')
const conn = require('../connection')
const Router = express.Router()

Router.get("/",(req, res)=>{
const qry = "SELECT * FROM medicines where category = 'herbal' "
    
conn.query(qry,(err, rows, fields)=>{
        if(!err){
            console.log("fetched rows")
            //console.log(rows)
            console.log(req.session.username)
            res.send(rows)
            
        }
        else{
            console.log("Failed to search")
            console.log(err)
        }
    })
})

module.exports = Router
