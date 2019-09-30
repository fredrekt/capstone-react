import React, { Component } from 'react'
import car1 from '../img/bg-2.jpeg'
import car2 from '../img/item3.jpg'
import car3 from '../img/bg-3.jpeg'
import { MDBBtn, MDBMask ,MDBCarousel, MDBView, MDBCarouselInner, MDBCarouselItem } from 'mdbreact'
import { MDBAnimation } from "mdbreact";

class Carousel extends Component{
    render(){
        return(
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
                    <MDBAnimation type="bounce">
                    <h2 className="caption-header">Medicines </h2>
                    </MDBAnimation>
                    <h5>It keeps us alive and be there for our loved ones.</h5>
                    <p>Software that helps everyone to be healthy and make things easier.</p>
                        <MDBBtn href="/sign-up" outline size="lg" className="mt-3" color="white">Get Started</MDBBtn>
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
                        <h2 className="caption-header-2">Where Lives &<br/> Medicines Matter</h2>
                        <h4>Essential to humanity's survival.</h4>
                        <p>God gave us life, therefore do not waste life. Preserve it!</p>
                        <div className="d-flex justify-content-center">
                            <div className="p-2 text-left"><MDBBtn href="/about" size="lg" className="mt-3" outline color="white">Read More</MDBBtn></div>
                            <div className="p-2 text-left"><MDBBtn href="/contact" size="lg" className="mt-3" outline color="white">Contact Us</MDBBtn></div>
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
                        <h2 className="caption-header-3"><span className="guide-h">Guiding you</span><br/>every step of the way</h2>
                        <h4>Reliable. Effecient. Easy To Use</h4>
                        <p>This Software is designed to help you live a healthy life.</p>
                    </MDBMask>
                    </MDBView>
                </MDBCarouselItem>
                </MDBCarouselInner>
                </MDBCarousel>        
        )
    }
}
export default Carousel