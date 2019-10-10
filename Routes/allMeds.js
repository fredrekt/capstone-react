const express = require('express')
const conn = require('../connection')
const Router = express.Router()

Router.get("/",(req, res)=>{

    const ratingqry = "select name, brand, price, image, stock, category, generic_name, AVG(ratings.rating) as ratingavg from medicines left join ratings on medicines.med_id = ratings.med_id group by medicines.med_id"
    const allqry = "select * from medicines"
    conn.query(ratingqry,(err, rows, fields)=>{
        if(!err){
            console.log('All meds are here',rows.ratingavg)
            console.log('result:',rows)
            res.send(rows)
        }
        else{
            console.log(err)
        }
    })
})

module.exports = Router