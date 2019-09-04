import React from 'react';
import Navbar from './Navbar';
import {BrowserRouter, Switch ,Route} from 'react-router-dom'
import Footer from './Footer'
import HomeComponent from './components/HomeComponent'
import AboutComponent from './components/AboutComponent'
import MedicinesComponent from './components/MedicinesComponent'
import ContactComponent from './components/ContactComponent'
import About from './components/About'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
          <Switch>
            <Route path="/" exact component={HomeComponent}/>
            <Route path="/about" component={AboutComponent}/>
            <Route path="/medicines" component={Login}/>
            <Route path="/contact" component={ContactComponent}/>
            <Route path="/sign-in" component={Login}/>
            <Route path="/sign-up" component={Register}/>
          </Switch>
        <Footer/>
      </div>
    </BrowserRouter>

  );
}

export default App;
