const express = require('express')
const conn = require('../../connection')
const Router = express.Router()


Router.get('/', (req, res) =>{
    const getOrders = `select distinct category from medicines`
    conn.query(getOrders, (err, rows, result) =>{
        if(err) throw err
        //console.log(rows)
        res.send(rows)
    })
})


module.exports = Router