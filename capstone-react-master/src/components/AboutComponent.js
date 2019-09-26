import React, { Component } from 'react'
import About from './About'
import Navbar from '../Navbar'
import Team from './Team'
import Use from './Use'
import ProjectTools from './ProjectTools'
import Breadcrumb from './Breadcrumb'


class AboutComponent extends Component{
    render(){
        return(
            <div>
               <Breadcrumb bheader="About Us" bcurrent="About"/>
               <About/>
               <Use/>
               <ProjectTools/>
               <Team/>
               
            </div>
        )
    }
}
export default AboutComponent