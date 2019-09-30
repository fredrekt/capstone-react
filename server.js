const express = require('express');
const session = require('express-session');
const mysql = require('./mysql');
const app = express();

const loginRouter = require('./Routes/login');
const usersRouter = require('./Routes/users');
const medicineRouter = require('./Routes/medicines');
const cartRouter = require('./Routes/cart');

const sessionstore = mysql.sessionStore;
 
const {
    PORT = 5000,
    node_env = 'development',
    session_name = 'sid',
    session_secret = 'sessions-secret'
} = process.env;


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
    store: sessionstore 
}));

app.use('/', usersRouter);
app.use('/', loginRouter);
app.use('/medicines', medicineRouter);
app.use('/cart', cartRouter);

app.listen(PORT, (err) =>{
    if(err) throw err
    console.log(`PORT connected to ${PORT}`);
})

