import React, { Component } from 'react'
import Contact from './Contact'
import Company from './Company'
import { MDBView, MDBMask } from 'mdbreact'
import Breadcrumb from './Breadcrumb'

class ContactComponent extends Component{
    render(){
        document.title = "Contact Us"
        return(
            <div>
                <Breadcrumb bheader="Contact Us" bcurrent="Contact"/>
                <Company/>
                <Contact/>
            </div>
        )
    }
}
export default ContactComponent