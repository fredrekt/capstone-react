import React, { Component } from 'react'
import Contact from './Contact'
import Company from './Company'
import { MDBView, MDBMask } from 'mdbreact'

class ContactComponent extends Component{
    render(){
        return(
            <div>
                <Company/>
                <Contact/>
            </div>
        )
    }
}
export default ContactComponent