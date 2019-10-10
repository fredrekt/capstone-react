const express = require('express')
const conn = require('../../connection')
const Router = express.Router()

Router.use(express.json())
Router.use(express.urlencoded({ extended: true }));

Router.post('/',(req, res) =>{
    const { name } = req.body
    const qryDel = `delete from medicines where name = '${name}'`
    conn.query(qryDel,(err, rows, result)=>{
        if(err) throw err
        res.send(rows)
        console.log('Product deleted!')
    })
})

module.exports = Router