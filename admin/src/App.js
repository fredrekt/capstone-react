import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideNav from './SideNav';
import NavigationBar from './Navbar'

//BrowserRouter, Routes & Switch
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AddProducts from './AddProducts';
import Login from './components/Login';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <SideNav/>
          <Switch>
            <Route exact path="/add-products" component={AddProducts} />
            <Route path="/login" component={Login}/>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
