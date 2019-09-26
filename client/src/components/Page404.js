import React from 'react'
import { MDBRow, MDBCol, MDBContainer, MDBBtn, MDBIcon, MDBAlert, MDBAnimation } from 'mdbreact'
import Breadcrumb from './Breadcrumb'
import img404 from '../img/404page.jpg'

const Page404 = () =>{
    return(
        <div>
            <Breadcrumb bheader="Page Not Found" bcurrent="Missing Page"/>
            <MDBContainer>    
                <MDBRow>
                    <MDBCol lg="6">
                        <img className="img-404" src={img404}/>
                    </MDBCol>
                    <MDBCol lg="6">
                        <div className="container-404-txt text-center">
                            <MDBAnimation type="slideInUp">
                                <MDBContainer>
                                        <MDBAlert color="danger" dismiss>
                                            <strong>Oh no!</strong> Looking for something?
                                        </MDBAlert>
                                </MDBContainer>
                            </MDBAnimation>
                            <h1 className="h1-404 danger-text">
                                <span className="txt-404">404</span><br/>
                                <span className="txt-sub-1">Holy Guacamole! page not found!</span>
                            </h1>
                            <p className="txt-sub-404">
                                The page you are looking for cannot be found
                                <br/>
                                I think it went to the moon <MDBIcon icon="heart-broken" />
                            </p>
                            <div className="center-404">
                                <MDBBtn href="/" color="danger" outline size="lg">Go Home</MDBBtn>
                            </div> 
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}
export default Page404