import React, { Component } from 'react'
import Breadcrumb from './Breadcrumb';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol ,MDBBtn, MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import Carousel from './Carousel';
import car1 from '../img/med-car-1.jpeg'
import car2 from '../img/med-car-2.jpeg'
import car3 from '../img/med-car-3.jpeg'

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
                    <h2 className="caption-header"> <span className="otc-header">OTC</span> <br/>Collection </h2>
                    <h5>Pharmaceutical Drugs sold "over the counter" in all pharmacies.</h5>
                    <p>Drugs that do not need a doctor's prescription.</p>
                        <MDBBtn outline size="lg" className="mt-3" color="white">See Collection</MDBBtn>
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
                    <h1 className="med-otc-h">Over the Counter</h1>
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol>
                                <MDBCard>
                                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                                    <MDBCardBody>
                                    <MDBCardTitle>Medicine Name</MDBCardTitle>
                                    <MDBCardText>
                                        Some quick example text to build on the card title and make
                                        up the bulk of the card&apos;s content.
                                    </MDBCardText>
                                    <MDBBtn color="primary" href="#">Add to Cart</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol>
                                <MDBCard>
                                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                                    <MDBCardBody>
                                    <MDBCardTitle>Medicine Name</MDBCardTitle>
                                    <MDBCardText>
                                        Some quick example text to build on the card title and make
                                        up the bulk of the card&apos;s content.
                                    </MDBCardText>
                                    <MDBBtn color="primary" href="#">Add to Cart</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol>
                                <MDBCard>
                                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                                    <MDBCardBody>
                                    <MDBCardTitle>Medicine Name</MDBCardTitle>
                                    <MDBCardText>
                                        Some quick example text to build on the card title and make
                                        up the bulk of the card&apos;s content.
                                    </MDBCardText>
                                    <MDBBtn color="primary" href="#">Add to Cart</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol>
                                <MDBCard>
                                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                                    <MDBCardBody>
                                    <MDBCardTitle>Medicine Name</MDBCardTitle>
                                    <MDBCardText>
                                        Some quick example text to build on the Medicine Name and make
                                        up the bulk of the card&apos;s content.
                                    </MDBCardText>
                                    <MDBBtn color="primary" href="#">Add to Cart</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <h1 className="med-otc-h-2">Herbal Collection</h1>
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol>
                                <MDBCard>
                                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                                    <MDBCardBody>
                                    <MDBCardTitle>Medicine Name</MDBCardTitle>
                                    <MDBCardText>
                                        Some quick example text to build on the card title and make
                                        up the bulk of the card&apos;s content.
                                    </MDBCardText>
                                    <MDBBtn color="primary" href="#">Add to Cart</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol>
                                <MDBCard>
                                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                                    <MDBCardBody>
                                    <MDBCardTitle>Medicine Name</MDBCardTitle>
                                    <MDBCardText>
                                        Some quick example text to build on the card title and make
                                        up the bulk of the card&apos;s content.
                                    </MDBCardText>
                                    <MDBBtn color="primary" href="#">Add to Cart</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol>
                                <MDBCard>
                                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                                    <MDBCardBody>
                                    <MDBCardTitle>Medicine Name</MDBCardTitle>
                                    <MDBCardText>
                                        Some quick example text to build on the card title and make
                                        up the bulk of the card&apos;s content.
                                    </MDBCardText>
                                    <MDBBtn color="primary" href="#">Add to Cart</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol>
                                <MDBCard>
                                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                                    <MDBCardBody>
                                    <MDBCardTitle>Medicine Name</MDBCardTitle>
                                    <MDBCardText>
                                        Some quick example text to build on the Medicine Name and make
                                        up the bulk of the card&apos;s content.
                                    </MDBCardText>
                                    <MDBBtn color="primary" href="#">Add to Cart</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <h1 className="med-otc-h-2">Experimental Collection</h1>
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol>
                                <MDBCard>
                                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                                    <MDBCardBody>
                                    <MDBCardTitle>Medicine Name</MDBCardTitle>
                                    <MDBCardText>
                                        Some quick example text to build on the card title and make
                                        up the bulk of the card&apos;s content.
                                    </MDBCardText>
                                    <MDBBtn color="primary" href="#">Add to Cart</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol>
                                <MDBCard>
                                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                                    <MDBCardBody>
                                    <MDBCardTitle>Medicine Name</MDBCardTitle>
                                    <MDBCardText>
                                        Some quick example text to build on the card title and make
                                        up the bulk of the card&apos;s content.
                                    </MDBCardText>
                                    <MDBBtn color="primary" href="#">Add to Cart</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol>
                                <MDBCard>
                                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                                    <MDBCardBody>
                                    <MDBCardTitle>Medicine Name</MDBCardTitle>
                                    <MDBCardText>
                                        Some quick example text to build on the card title and make
                                        up the bulk of the card&apos;s content.
                                    </MDBCardText>
                                    <MDBBtn color="primary" href="#">Add to Cart</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol>
                                <MDBCard>
                                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                                    <MDBCardBody>
                                    <MDBCardTitle>Medicine Name</MDBCardTitle>
                                    <MDBCardText>
                                        Some quick example text to build on the Medicine Name and make
                                        up the bulk of the card&apos;s content.
                                    </MDBCardText>
                                    <MDBBtn color="primary" href="#">Add to Cart</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>
                </div>
        )
    }
}
export default Medicines
