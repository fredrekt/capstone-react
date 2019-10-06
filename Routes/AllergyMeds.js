const express = require('express')
const conn = require('../connection')
const Router = express.Router()

Router.get("/",(req, res)=>{
    conn.query("select * from medicines where category= 'Allergy' || 'allergy'   ",(err, rows, fields)=>{
        if(!err){
            console.log('Allergy meds are here')
            // res.send("<h1>"+rows[1].name+"</h1>")
            //console.log(rows)
            res.send(rows)
        }
        else{
            console.log(err)
        }
    })
})

// another query for single item

// Router.get("/meds2",(req, res)=>{
//     conn.query("select name from medicines where med_id=2",(err, rows, fields)=>{
//         if(!err){
//             console.log('Medicines JSON is here')
//             // res.send("<h1>"+rows[1].name+"</h1>")
//             console.log(rows)
//             res.send(rows)
//         }
//         else{
//             console.log(err)
//         }
//     })
// })

module.exports = Router