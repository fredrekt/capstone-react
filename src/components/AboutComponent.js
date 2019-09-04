import React, { Component } from 'react'
import About from './About'
import Navbar from '../Navbar'
import Team from './Team'
import Use from './Use'
import TestimonialsMultiPage from './ProjectTools'


class AboutComponent extends Component{
    render(){
        return(
            <div>
               <About/>
               <Use/>
               <TestimonialsMultiPage/>
               <Team/>
               
            </div>
        )
    }
}
export default AboutComponent