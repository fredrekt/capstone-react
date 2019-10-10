const express = require('express')
const conn = require('../connection')
const Router = express.Router()

Router.use(express.json());
Router.use(express.urlencoded({ extended: true }));

Router.post('/addtoCart/:item_id', (req,res) =>{
    const date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const getMedicine = `SELECT * FROM medicines WHERE med_id = ${req.params.item_id}`;

    conn.query(getMedicine, (err, resultMed) =>{
        if(err)throw err;
        const med_id = resultMed[0].med_id;
        const qtyv = req.body.qvalue
        const existCart = `SELECT * FROM orders WHERE med_id = ${med_id}`;
        conn.query(existCart, (err, resultExist) =>{
           
        
        const addCart = `INSERT INTO orders (med_id, user_id,date_ordered,price,qty) VALUES (${req.params.item_id},'${req.session.username}' , '${date}',${resultMed[0].price}, ${qtyv})`;
        if(resultExist){
            conn.query(addCart, () =>{ 
            if(err) throw err
                res.end();
            })
        }else{
            console.log('cart already exist');
        }
        })
    })
});
 
//display cart
Router.get('/', (req,res) =>{
    const getUserCart = `SELECT orders.order_id, orders.qty, medicines.name, medicines.price
    FROM (orders
    INNER JOIN medicines ON orders.med_id = medicines.med_id)
    WHERE user_id = '${req.session.username}'`
    conn.query(getUserCart, (err,result) =>{
            if(err) throw err
            res.json(result);
        })

});

Router.get('/cartTotalPrice', (req,res) =>{
    const getPrice = `select SUM(price * qty) as price from orders where user_id =  '${req.session.username}'`;
        conn.query(getPrice, (err,result) =>{
            if(err) throw err;
            res.json(result[0].price);
        })
})

Router.post('/removecart/:order_id', (req,res) =>{
    const removeCart = `DELETE FROM orders WHERE order_id = ${req.params.order_id};`
        conn.query(removeCart,(err) =>{
        if(err) throw err
    })

    res.end();
})
 
  
module.exports = Router;