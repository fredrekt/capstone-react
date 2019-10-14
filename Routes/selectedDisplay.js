const express = require('express')
const conn = require('../connection')
const Router = express.Router()

Router.get("/",(req, res)=>{
    const categname = req.params.category
    //const categname = 'allergy'
    console.log('category selected',categname)
    const sortQry = `select * from medicines where category ='fever'  `
    conn.query(sortQry,(err, rows, fields)=>{
        if(!err){
            //console.log('Displayed by Category', rows)
            res.send(rows)
        }
        else{
            console.log(err)
        }
    })
})

Router.get("/allergy",(req, res)=>{
    const categname = req.params.category
    //const categname = 'allergy'
    console.log('category selected',categname)
    const sortQry = `select * from medicines where category ='allergy' order by name asc `
    conn.query(sortQry,(err, rows, fields)=>{
        if(!err){
            //console.log('Displayed by Category', rows)
            res.send(rows)
        }
        else{
            console.log(err)
        }
    })
})


Router.get("/pain",(req, res)=>{
    const categname = req.params.category
    //const categname = 'allergy'
    console.log('category selected',categname)
    const sortQry = `select * from medicines where category ='pain reliever' order by name asc  `
    conn.query(sortQry,(err, rows, fields)=>{
        if(!err){
            //console.log('Displayed by Category', rows)
            res.send(rows)
        }
        else{
            console.log(err)
        }
    })
})


Router.get("/vitamins",(req, res)=>{
    const categname = req.params.category
    //const categname = 'allergy'
    console.log('category selected',categname)
    const sortQry = `select * from medicines where category ='fever' order by name asc`
    conn.query(sortQry,(err, rows, fields)=>{
        if(!err){
            //console.log('Displayed by Category', rows)
            res.send(rows)
        }
        else{
            console.log(err)
        }
    })
})

module.exports = Router