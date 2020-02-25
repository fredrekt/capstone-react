const express = require('express')
const conn = require('../../connection')
const Router = express.Router()

Router.get('/', (req, res) =>{    
 const serviceratingquery = "select * from service"
    conn.query(serviceratingquery, (err,rows, result) =>{
        if(err) throw err
        console.log('rating comments displayed')
        //res.send(result)
        res.send(rows)

    })
})

module.exports = Router