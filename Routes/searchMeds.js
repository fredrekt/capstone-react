const express = require('express')
const conn = require('../connection')
const Router = express.Router()

//third try
//Router.use(express.json())
Router.use(express.urlencoded({extended: true}))

Router.post("/",(req, res)=>{
const value = req.body.mvalue;
// Router.use(express.json())

//second try ====== Worst Case Scenario
//const qry = `select * from medicines where name= 'biogesic'`

//const qry = `select * from medicines where name = '${value}' `
console.log(value)
const qry = "SELECT * FROM medicines where name like '%"+value+"%' "
    
conn.query(qry,(err, rows, fields)=>{
        if(!err){

            if(rows!=0){
            console.log("fetched rows")
            console.log(rows)
            //worst case scenario
            res.send(rows)
            }
            else{
                console.log('failed to find')
                res.send('did not find anything')
                // must redirect to a component 
                // that will return an error view
                // (wasnt able to find meds)
            }
            
        }
        else{
            console.log("Failed to search")
            console.log(err)
        }
    })
})

module.exports = Router
