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

//checkout 

Router.get('/updateCart',(req, res) =>{
    const user = req.session.username
    const showOrders = `select * from orders where user_id ='${user}' `

    conn.query(showOrders,(err,row)=>{
        if(err) throw err
        const qty = row[0].qty
        const qty2 = row[1].qty
        const qty3 = row[2].qty
        const qty4 = row[3].qty 
        console.log('Quantity of item: ',qty)
        console.log('qty 2: ',qty2)
        console.log('qty 3: ',qty3)
        console.log('qty 4: ',qty4)

    const medid = req.params.medid
    const updateQry = `update medicines set stock =(stock - ${qty}) where med_id = 1`
    conn.query(updateQry, (err, rows, result) =>{
        if(err) throw err
        console.log('Checkout Successful!')
        //res.send(rows)
    })
    
    const updateQry2 = `update medicines set stock =(stock - ${qty2}) where med_id = 3`
    conn.query(updateQry2, (err, rows, result) =>{
        if(err) throw err
        console.log('Checkout Successful2!')
        //res.send(rows)
    })

    const updateQry3 = `update medicines set stock =(stock - ${qty3}) where med_id = 8`
    conn.query(updateQry3, (err, rows, result) =>{
        if(err) throw err
        console.log('Checkout Successful 3!')
        //res.send(rows)
    })

    const updateQry4 = `update medicines set stock =(stock - ${qty4}) where med_id = 11`
    conn.query(updateQry4, (err, rows, result) =>{
        if(err) throw err
        console.log('Checkout Successful 4!')
        //res.send(rows)
    })

})//qry for showing items on cart on current user logged in
})
 
  
module.exports = Router;