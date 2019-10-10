const express = require('express')
const conn = require('../../connection')
const Router = express.Router()

Router.use(express.json())
Router.use(express.urlencoded({ extended: true }));

Router.post('/', (req, res) =>{
    const { stock, medid, name } = req.body
    const updateStock = `update medicines set stock = (stock + ${stock}) where med_id = ${name}`
    conn.query(updateStock, (err,rows, result) =>{  
        if(err) throw err
        console.log('updated product stock!')
        res.send(rows)
    })
})

module.exports = Router