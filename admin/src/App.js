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
function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <SideNav/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add-products" component={AddProducts} />
            <Route path="/ordered-products" component={OrderedProducts} />
            <Route path="/login" component={Login}/>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
