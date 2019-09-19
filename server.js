const express = require('express')
const bodyParser = require('body-parser')
const conn = require('./connection')
const prodRoute = require('./Routes/medicines')
const prodRoute2 = require('./Routes/medicines2')
const prodRouteAll = require('./Routes/allMeds')


var app = express()
app.use(bodyParser.json())
//first medicine fetch from database to server sa web browser storing it to json
app.use("/meds", prodRoute)
// app.use("/meds2",prodRoute)

//second medicine
app.use("/meds2",prodRoute2)

//All Medicines 
app.use("/all-meds",prodRouteAll)


app.listen(3001)