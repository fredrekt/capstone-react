import React, { Component } from "react";
import { MDBView, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBIcon, MDBTooltip,  MDBBadge, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBBtn, MDBAnimation } from "mdbreact";
import fi1 from '../img/fi-med-1.jpeg'
import fi2 from '../img/fi-med-2.jpeg'
import fi3 from '../img/fi-med-3.jpeg'
import fi4 from '../img/fi-med-4.jpeg'
import phlogo from '../img/ph-flag.png'
import biogesic from '../img/meds-bio.jpeg'
import biogesic2 from '../img/meds-sample-pic-2.jpeg'
import biogesic3 from '../img/meds-sample-pic-3.jpeg'
import biogesic4 from '../img/meds-sample-pic-4.jpeg'
import Slide from 'react-reveal/Slide'
class FeaturedItems extends Component{
  render(){
    return (
    <Slide up>
        <MDBContainer>
            <section className="text-center my-5">
            <h2 className="fi-header">
                Bestselling Medicines
            </h2>
            <p className="grey-text text-center w-responsive mx-auto mb-5">
                Our Featured Medicines are here for you to choose and add to cart. <br/>We have a variety of Medicines in our Applictaion.
            </p>
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
                                        <MDBCardImage hover zoom className="img-fluid" src={biogesic3} waves />
                                        <MDBCardBody>
                                        <MDBCardTitle><h3 className="med-item-header">Neozep</h3></MDBCardTitle>
                                        <MDBCardText>
                                            <div className="med-content-container">
                                                <div className="grey-text text-center">
                                                <p className="med-sub-h">
                                                    <MDBIcon icon="tags" />
                                                        Neozep Forte
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

            </section>
        </MDBContainer>
    </Slide>
    );
  }
}

export default FeaturedItems;