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
const register = require('./Routes/register')
const login = require('./Routes/login')
const account = require('./Routes/account')
const medsitem = require('./Routes/medicineitem')
const session = require('express-session'); 

//clydex 
const rateservice = require('./Routes/clydex/servicerating')
const allrating = require('./Routes/clydex/displayrating')
const avgrating = require('./Routes/clydex/displayratingoverall')

//sort by ASC => Alphabetical 
const sortbyA = require('./Routes/atoz')
const sortCat = require('./Routes/Admin/categorychoices')
const sortDisplay = require('./Routes/selectedDisplay')

//ratings 
const addrating = require('./Routes/Ratings/addrating')
const displayratings = require('./Routes/Ratings/displayratings')

//cart
const cartRouter = require('./Routes/cart');

//admin 
const getOrders = require('./Routes/Admin/orders')
const inventory = require('./Routes/Admin/inventory')
const addproduct = require('./Routes/Admin/addproduct')
const updateStock = require('./Routes/Admin/updatestocks')
const deleteprod = require('./Routes/Admin/deleteproduct')
const categchoices = require('./Routes/Admin/categorychoices')

var app = express()
// app.use(bodyParser.urlencoded({ extended: false}))
// app.use(bodyParser.json())

//session declaration
const {
    node_env = 'development',
    session_name = 'sid',
    session_secret = 'sessions-secret'
} = process.env;
//use session 
app.use(session({
    name: session_name,
    resave: false,
    saveUninitialized: false,
    secret: session_secret,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        secure: node_env === 'production',
        httpOnly: false
    },

}));

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

//register route
app.use("/register",register)

//login route
app.use("/login",login)

//edit account route
app.use("/account",account)

//meds item
app.use('/medicines', medsitem);

//A to Z sort 
app.use('/orderbya',sortbyA)

//category 
app.use('/allmeds-cat',sortCat)

//sort by category selected
app.use('/sort-category',sortDisplay)

//Rating Routes

//add rating to a medicine
app.use('/add-rating',addrating)

//display rating on a medicine
app.use('/med-rating',displayratings)

//cart route
app.use('/cart', cartRouter)

//admin route

//show all prod from inventory
app.use('/allprod',inventory)

//category choices
app.use('/category-choices',categchoices)

//show orders for approval

app.use('/all-orders',getOrders)

//adding product
app.use('/addproduct', addproduct)

//update stock
app.use('/update-stock',updateStock)

//delete product
app.use('/delete-product',deleteprod)

//clydex 
app.use('/rate-service',rateservice)

//clydex display rating
app.use('/service-ratings',allrating)

//clydex all rating
app.use('/overall-rating',avgrating)

//approve product

app.listen(3001)