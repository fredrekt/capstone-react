import React, { Component } from 'react'
import Breadcrumb from './Breadcrumb';
import { MDBIcon, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol ,MDBBtn, MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import Carousel from './Carousel';
import car1 from '../img/med-car-1.jpeg'
import car2 from '../img/med-car-2.jpeg'
import car3 from '../img/med-car-3.jpeg'
import medsample from '../img/meds-sample-pic.jpeg'
import phlogo from '../img/ph-flag.png'
import biogesic from '../img/meds-bio.jpeg'
import { MDBAnimation } from "mdbreact"
import Slide from 'react-reveal/Slide'


class Medicines extends Component{
    render(){
        return(
            <div>
           <MDBCarousel
                    activeItem={1}
                    length={3}
                    showControls={true}
                    showIndicators={true}
                    className="z-depth-1"
                >
                <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                <MDBView src={car2}>
                    <MDBMask overlay="black-light" className="flex-center flex-column text-white text-center">
                    <MDBAnimation type="bounceInRight">
                    <h2 className="caption-header"> <span className="otc-header">OTC</span> <br/>Collection </h2>
                    </MDBAnimation>
                    <h5>Pharmaceutical Drugs sold "over the counter" in all pharmacies.</h5>
                    <p>Drugs that do not need a doctor's prescription.</p>
                        <MDBBtn href="#OTC-section" outline size="lg" className="mt-3" color="white">See Collection</MDBBtn>
                    </MDBMask>
                </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                    <MDBView>
                    <img
                        className="d-block w-100"
                        src={car1}
                        alt="Second slide"
                    />
                    <MDBMask overlay="black-strong" className="flex-center flex-column text-white text-center">
                        <h2 className="caption-header">Herbs<br/> Collection</h2>
                        <h4>Organic medicines & remedies for the human body.</h4>
                        <p>A plant or part of a plant to use for medical purposes.</p>
                        <div className="d-flex justify-content-center">
                            <div className="p-2 text-left"><MDBBtn size="lg" className="mt-3" outline color="white">Get Remedies</MDBBtn></div>
                        </div>
                    </MDBMask>
                    </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                    <MDBView>
                    <img
                        className="d-block w-100"
                        src={car3}
                        alt="Third slide"
                    />
                    <MDBMask overlay="black-strong" className="flex-center flex-column text-white text-center">
                        <h2 className="caption-header">Experimental <br/>Collection</h2>
                        <h4>A treatment, involves gambling to defeat sickness.</h4>
                        <p>Medical treatments not yet approved by government.</p>
                        <div className="d-flex justify-content-center">
                            <div className="p-2 text-left"><MDBBtn size="lg" className="mt-3" outline color="white">Start Gamble</MDBBtn></div>
                        </div>
                    </MDBMask>
                    </MDBView>
                </MDBCarouselItem>
                </MDBCarouselInner>
                </MDBCarousel>  
                
                <div className="med-container">
                <Slide up>
                    <h1 className="med-otc-h">Over the Counter</h1>
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol>
                                <a className="meds-card-link" href="/meds/item">
                                <MDBCard>
                                    <MDBCardImage className="img-fluid" src={biogesic} waves />
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
                                                    <h4 className="med-price"><img src={phlogo} className="icon-ph-flag" alt=""/> Php 5.00</h4> 
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
                                    <MDBCardImage className="img-fluid" src={biogesic} waves />
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
                                                    <h4 className="med-price"><img src={phlogo} className="icon-ph-flag" alt=""/> Php 5.00</h4> 
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
                                    <MDBCardImage className="img-fluid" src={biogesic} waves />
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
                                                    <h4 className="med-price"><img src={phlogo} className="icon-ph-flag" alt=""/> Php 5.00</h4> 
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
                                    <MDBCardImage className="img-fluid" src={biogesic} waves />
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
                                                    <h4 className="med-price"><img src={phlogo} className="icon-ph-flag" alt=""/> Php 5.00</h4> 
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
                 
                    <h1 className="med-otc-h-2">Herbal Collection</h1>
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol>
                            <a className="meds-card-link" href="/meds/item">
                                <MDBCard>
                                    <MDBCardImage className="img-fluid" src={biogesic} waves />
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
                                                    <h4 className="med-price"><img src={phlogo} className="icon-ph-flag" alt=""/> Php 5.00</h4> 
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
                                    <MDBCardImage className="img-fluid" src={biogesic} waves />
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
                                                    <h4 className="med-price"><img src={phlogo} className="icon-ph-flag" alt=""/> Php 5.00</h4> 
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
                                    <MDBCardImage className="img-fluid" src={biogesic} waves />
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
                                                    <h4 className="med-price"><img src={phlogo} className="icon-ph-flag" alt=""/> Php 5.00</h4> 
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
                                    <MDBCardImage className="img-fluid" src={biogesic} waves />
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
                                                    <h4 className="med-price"><img src={phlogo} className="icon-ph-flag" alt=""/> Php 5.00</h4> 
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
                    </Slide>
                    <Slide up>
                    <h1 className="med-otc-h-2">Experimental Collection</h1>
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol>
                            <a className="meds-card-link" href="/meds/item">
                                <MDBCard>
                                    <MDBCardImage className="img-fluid" src={biogesic} waves />
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
                                                    <h4 className="med-price"><img src={phlogo} className="icon-ph-flag" alt=""/> Php 5.00</h4> 
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
                                    <MDBCardImage className="img-fluid" src={biogesic} waves />
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
                                                    <h4 className="med-price"><img src={phlogo} className="icon-ph-flag" alt=""/> Php 5.00</h4> 
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
                                    <MDBCardImage className="img-fluid" src={biogesic} waves />
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
                                                    <h4 className="med-price"><img src={phlogo} className="icon-ph-flag" alt=""/> Php 5.00</h4> 
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
                                    <MDBCardImage className="img-fluid" src={biogesic} waves />
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
                                                    <h4 className="med-price"><img src={phlogo} className="icon-ph-flag" alt=""/> Php 5.00</h4> 
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
                    </Slide>
                </div>
                </div>
                
        )
    }
}
export default Medicines
