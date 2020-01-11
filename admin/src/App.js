import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideNav from './SideNav';
import NavigationBar from './Navbar'
import Home from './components/Home'
//BrowserRouter, Routes & Switch
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AddProducts from './AddProducts';
import Login from './components/Login';
import OrderedProducts from './components/OrderedProducts';
import ProductInventory from './components/ProductInventory';
import Account from './components/Account';
import UpdateStocks from './components/UpdateStocks';
import RemoveProduct from './components/RemoveProduct';
import Shipping from './components/Shipping'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <SideNav/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add-products" component={AddProducts} />
            <Route path="/ordered-products" component={OrderedProducts} />
            <Route path="/show-inventory" component={ProductInventory} />
            <Route path="/update-stocks" component={UpdateStocks} />
            <Route path="/account" component={Account} />
            <Route path="/remove-product" component={RemoveProduct} />
            <Route path="/shipping" component={Shipping} />
            {/* <Route path="/login" component={Login}/> */}
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
