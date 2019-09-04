import React from 'react'
import { MDBContainer, MDBView, MDBMask, MDBBreadcrumb, MDBBreadcrumbItem } from 'mdbreact'
import bgcrumbs from '../img/bcrumbs-bg.jpg'
import { Link } from 'react-router-dom'

const Breadcrumb = (props) =>{
    return(
        <div className="bcrumbs-size" >
                <MDBMask overlay="black-strong" className="flex-center flex-column text-white text-center">
                    <div className="brc-img">
                            <div className="brc-content">
                                <div className="brc-ins-cont">
                                    <h1 className="brc-header">{props.bheader}</h1>
                                    <a className='brc-bread-link' href="/">Home</a> / <span className="grey-text">{props.bcurrent}</span>
                                </div>
                            </div>
                    </div>
                        
                </MDBMask>   
            
            
            
        </div>


    )
}
export default Breadcrumb