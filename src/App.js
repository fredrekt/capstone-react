import React from 'react';
import Navbar from './Navbar';
import {BrowserRouter, Switch ,Route} from 'react-router-dom'
import Footer from './Footer'
import HomeComponent from './components/HomeComponent';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Switch>
        <Route path="/" component={}/>
        <Route path="/about" component={}/>
        <Route path="/medicines" component={}/>
        <Route path="/contact" component={}/>
      </Switch> */}
      <HomeComponent/>
      <Footer/>
    </div>
  );
}

export default App;
