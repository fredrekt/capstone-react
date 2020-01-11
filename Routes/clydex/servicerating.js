const express = require('express')
const conn = require('../../connection')
const Router = express.Router()

Router.use(express.json())
Router.use(express.urlencoded({ extended: true }));


Router.post('/', (req, res) =>{
    const { rating, comment } = req.body
    const userid  = req.session.username
    
    const addprod = `insert into service (user_id, rating, comment) values('${userid}', '${rating}', '${comment}')`
    conn.query(addprod, (err,rows, result) =>{
        if(err) throw err
        console.log('Done rating service!')
        //res.send(result)
        res.send(rows)

    })
})

module.exports = Router