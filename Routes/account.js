const express = require('express')
const conn = require('../connection')
const Router = express.Router()

    Router.get("/",(req, res)=>{
        const user = req.session.username
        const qry = "SELECT * FROM users where username = '"+user+"' "
        conn.query(qry,(err, rows, fields)=>{
                if(!err){
                    console.log("fetched rows")
                    console.log(rows)
                    res.send(rows)
                    
                }
                else{
                    console.log("Failed to search")
                    console.log(err)
                }
            })
        })

    Router.post("/update",(req, res)=>{
        const user = req.session.username
        // const username = req.body.username
        //cannot change username hehe
        const password = req.body.password
        const fullname = req.body.fullname
        const email = req.body.email
        const bdate = req.body.bdate
        const gender = req.body.gender
        const postal = req.body.postal

        console.log(req.body)
        const qry = "Update users set password='"+password+"', full_name = '"+fullname+"', email ='"+email+"', date_of_birth = '"+bdate+"', gender ='"+gender+"', location_code ='"+postal+"' where username = '"+user+"' "
        conn.query(qry,(err, rows, fields)=>{
                if(!err){
                    console.log("Updated your profile")
                    console.log(rows)
                    res.send(rows)
                    
                }
                else{
                    console.log("Failed to search")
                    console.log(err)
                }
            })
        })    
module.exports = Router
