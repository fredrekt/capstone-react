const express = require('express')
const conn = require('../../connection')
const Router = express.Router()


Router.get('/', (req, res) =>{

    const getOrders = `select orders.order_id, orders.user_id, orders.med_id, orders.qty, medicines.stock, medicines.name from orders left join medicines on orders.med_id = medicines.med_id`
    //const getStock = `select stock from medicines`
    conn.query(getOrders, (err, rows, result) =>{
        if(err) throw err
        //console.log(rows)
        res.send(rows)
    })
})


Router.get('/update/:medid',(req, res) =>{
    const medid = req.params.medid;
        const getOrders = `select orders.qty, medicines.stock from orders left join medicines on medicines.med_id = ${medid}`
        conn.query(getOrders, (err, row, result) =>{
            if(err)
            throw err
        const qtyV = row[0].qty;
    console.log(row)
    const stackV = row[0].stock;
    const approveOrders = `update medicines set stock = (stock - ${qtyV}  ) where med_id = ${medid} `
    if(qtyV<=stackV){
    conn.query(approveOrders, (err, rows, result)=>{
        if(err) throw err
        // res.json({
        //     message: 'Success'
        // })
        res.json({
            message: 'success'
        })
    })
}else{
    console.log('not enough stocks')
        // res.send(row[0].qty) 
        res.json({
            message: 'error'
        })
}
})
})


module.exports = Router