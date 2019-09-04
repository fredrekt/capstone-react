import React from 'react';
import Navbar from './Navbar';
import {BrowserRouter, Switch ,Route} from 'react-router-dom'
import Footer from './Footer'
import HomeComponent from './components/HomeComponent'
import AboutComponent from './components/AboutComponent'
import MedicinesComponent from './components/MedicinesComponent'
import ContactComponent from './components/ContactComponent'
import About from './components/About'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
          <Switch>
            <Route path="/" exact component={HomeComponent}/>
            <Route path="/about" component={AboutComponent}/>
            <Route path="/contact" component={ContactComponent}/>
          </Switch>
        <Footer/>
      </div>
    </BrowserRouter>

  );
}

export default App;
