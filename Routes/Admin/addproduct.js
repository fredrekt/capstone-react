const express = require('express')
const conn = require('../../connection')
const Router = express.Router()

Router.use(express.json())
Router.use(express.urlencoded({ extended: true }));
//route => /addproduct
Router.post('/', (req, res) =>{
    const { name, generic, brand, shape, dosage, info, price, image, category, stock} = req.body
    const addprod = `insert into medicines (name, generic_name, brand, shape,dosage, info, price, image, category, stock) values('${name}', '${generic}','${brand}','${shape}','${dosage}','${info}','${price}','${image}', '${category}','${stock}')`
    conn.query(addprod, (err,rows, result) =>{
        if(err) throw err
        console.log('Product added!')
        //res.send(result)
        res.send(rows)

    })
})

module.exports = Router