const express = require('express')
const conn = require('../../connection')
const Router = express.Router()

Router.get('/', (req, res) =>{    
 const serviceratingquery = "select avg(rating) as ratingf from service"
    conn.query(serviceratingquery, (err,rows, result) =>{
        if(err) throw err
        console.log('rating displayed')
        console.log(rows)
        //res.send(result)
        res.send(rows)

    })
})

module.exports = Router