import React, { Component } from 'react'
import About from './About'
import Navbar from '../Navbar'
import Team from './Team'
import Use from './Use'
import ProjectTools from './ProjectTools'
import Breadcrumb from './Breadcrumb'
import ScrollUpButton from "react-scroll-up-button"
import { MDBIcon, MDBTooltip } from 'mdbreact'
import ScrollButton from './ScrollButton'

class AboutComponent extends Component{
    render(){
        document.title = "About Medishop"
        return(
            <div>
               <Breadcrumb bheader="About Us" bcurrent="About"/>
               <About/>
               <Use/>
               <ProjectTools/>
               <Team/>
               <ScrollButton/>
                 
            </div>
        )
    }
}
export default AboutComponent