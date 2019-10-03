const express = require('express')
const conn = require('../../connection')
const Router = express.Router()


Router.use(express.json());
Router.use(express.urlencoded({ extended: true }));

Router.post("/:med_id",(req, res)=>{

    const userid = req.session.username
    const medid = req.params.med_id
    const rate = req.body.vrating

    const qry = "insert INTO ratings(user_id, med_id, rating) values ('"+userid+"','"+medid+"','"+rate+"')"
        
    conn.query(qry,(err, rows, fields)=>{
            if(!err){
                console.log("fetched rows")
                //res.send(rows)
                
            }
            else{
                console.log("Failed to search")
                console.log(err)
            }
        })
    })

module.exports = Router
