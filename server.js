const express = require('express')
const bodyParser = require('body-parser')
const conn = require('./connection')
const prodRoute = require('./Routes/medicines')
const prodRoute2 = require('./Routes/medicines2')
const prodRouteAll = require('./Routes/allMeds')
const allergyRoute = require('./Routes/AllergyMeds')
const searchMeds = require('./Routes/searchMeds')
const herbalMeds = require('./Routes/herbals')
const users = require('./Routes/users')
const login = require('./Routes/login')

var app = express()
// app.use(bodyParser.urlencoded({ extended: false}))
// app.use(bodyParser.json())
//first medicine fetch from database to server sa web browser storing it to json
app.use("/meds", prodRoute)
// app.use("/meds2",prodRoute)

//second medicine
app.use("/meds2",prodRoute2)

//All Medicines 
app.use("/all-meds",prodRouteAll)

//Allergy Medicines
app.use("/allergy-meds",allergyRoute)

//try search query
app.use("/search-meds",searchMeds)

//herbal route
app.use("/herbal",herbalMeds)

//user to session route
app.use("/users",users)

//login route
app.use("/login",login)

app.listen(3001)