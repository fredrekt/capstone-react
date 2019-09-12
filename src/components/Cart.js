import React, { Component } from 'react'
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBCard, MDBCardText, MDBCardBody, MDBCardTitle, MDBCardImage, MDBIcon } from 'mdbreact' 
import Breadcrumb from './Breadcrumb'
import biogesic from '../img/meds-bio.jpeg'
import biogesic2 from '../img/meds-sample-pic-2.jpeg'
import biogesic3 from '../img/meds-sample-pic-3.jpeg'
import biogesic4 from '../img/meds-sample-pic-4.jpeg'
import phlogo from '../img/ph-flag.png'

class Cart extends Component{
    render(){
        return(
            <div>
                <Breadcrumb bheader="Shopping Cart" bcurrent="Cart" />
                    <div className="cart-container">   
                        
                        <MDBContainer>
                            <h1 className="cart-header">
                                Your Cart
                            </h1>
                            <p className="cart-sub-h grey-text">
                                You have 3 iems in your cart
                            </p>
                            <MDBRow>
                                <MDBCol>
                                    <img className="cart-img rounded" src={biogesic}/>
                                </MDBCol>
                                <MDBCol>
                                    <h2 className="cart-price"> <span>&#8369;</span> 75.00</h2>
                                </MDBCol>
                            </MDBRow>
                            <div className="cart2-container">
                            <MDBRow>
                                <MDBCol>
                                    <img className="cart-img rounded" src={biogesic2}/>
                                </MDBCol>
                                <MDBCol>
                                    <h2 className="cart-price"> <span>&#8369;</span> 23.00</h2>
                                </MDBCol>
                            </MDBRow>
                            </div>
                            <MDBRow>
                                <MDBCol>
                                    <img className="cart-img rounded" src={biogesic}/>
                                </MDBCol>
                                <MDBCol>
                                    <h2 className="cart-price"> <span>&#8369;</span> 13.00</h2>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol>
                                    
                                </MDBCol>
                                <MDBCol>
                                    <MDBBtn size="lg" color="success">Checkout</MDBBtn>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                        
                        <div className="cart-suggestions-container">
                            <MDBContainer>
                                <h4 className="cart-suggestions-h grey-text">
                                    Suggested Medicines
                                </h4>
                                <MDBRow>
                                    <MDBCol>
                                    <a className="meds-card-link" href="/meds/item">
                                                    {/* <MDBView hover zoom> */}
                                                        <MDBCard>
                                                            <MDBCardImage hover zoom className="img-fluid" src={biogesic} waves />
                                                            <MDBCardBody>
                                                            <MDBCardTitle><h3 className="med-item-header">Biogesic</h3></MDBCardTitle>
                                                            <MDBCardText>
                                                                <div className="med-content-container">
                                                                    <div className="grey-text text-center">
                                                                    <p className="med-sub-h">
                                                                        <MDBIcon icon="tags" />
                                                                            Biogesic
                                                                        </p>
                                                                    </div>
                                                                    <div className="prizeandlogo-container">
                                                                        <div className="black-text text-center">
                                                                            <h4 className="med-price"><img src={phlogo} className="icon-ph-flag" alt=""/> <span>&#8369;</span> 6.00</h4> 
                                                                        </div>    
                                                                    </div>
                                                                </div>
                                                            </MDBCardText>
                                                            </MDBCardBody>
                                                        </MDBCard>
                                                        {/* </MDBView> */}
                                                        </a>
                                    </MDBCol>
                                    <MDBCol>
                                    <a className="meds-card-link" href="/meds/item">
                                                        <MDBCard>
                                                            <MDBCardImage hover zoom className="img-fluid" src={biogesic2} waves />
                                                            <MDBCardBody>
                                                            <MDBCardTitle><h3 className="med-item-header">Enervon</h3></MDBCardTitle>
                                                            <MDBCardText>
                                                                <div className="med-content-container">
                                                                    <div className="grey-text text-center">
                                                                    <p className="med-sub-h">
                                                                        <MDBIcon icon="tags" />
                                                                            Enervon
                                                                        </p>
                                                                    </div>
                                                                    <div className="prizeandlogo-container">
                                                                        <div className="black-text text-center">
                                                                            <h4 className="med-price"><img src={phlogo} className="icon-ph-flag" alt=""/> <span>&#8369;</span> 5.00</h4> 
                                                                        </div>    
                                                                    </div>
                                                                </div>
                                                            </MDBCardText>
                                                            </MDBCardBody>
                                                        </MDBCard>
                                                        </a>
                                    </MDBCol>
                                    <MDBCol>
                                    <a className="meds-card-link" href="/meds/item">
                                                        <MDBCard>
                                                            <MDBCardImage hover zoom className="img-fluid" src={biogesic4} waves />
                                                            <MDBCardBody>
                                                            <MDBCardTitle><h3 className="med-item-header">Alaxan</h3></MDBCardTitle>
                                                            <MDBCardText>
                                                                <div className="med-content-container">
                                                                    <div className="grey-text text-center">
                                                                    <p className="med-sub-h">
                                                                        <MDBIcon icon="tags" />
                                                                            Alaxan Fr
                                                                        </p>
                                                                    </div>
                                                                    <div className="prizeandlogo-container">
                                                                        <div className="black-text text-center">
                                                                            <h4 className="med-price"><img src={phlogo} className="icon-ph-flag" alt=""/> <span>&#8369;</span> 5.00</h4> 
                                                                        </div>    
                                                                    </div>
                                                                </div>
                                                            </MDBCardText>
                                                            </MDBCardBody>
                                                        </MDBCard>
                                                        </a>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer> 
                        </div>
                    </div>
            </div>
        )
    }
}
export default Cart