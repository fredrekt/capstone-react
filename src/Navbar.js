import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import './Styles.css'
import car1 from './img/bg-2.jpeg'
import car2 from './img/item3.jpg'
import car3 from './img/bg-3.jpeg'
import { MDBBtn } from "mdbreact";

import { MDBCarousel, MDBCarouselInner, MDBCarouselItem } from
"mdbreact";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div>
        <header>
          <Router>
            <MDBNavbar color="eleg" fixed="top" dark expand="md" scrolling transparent>
              <MDBNavbarBrand href="/">
                <strong id="nav-brand">Medishop</strong>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav right>
                    {/* <div className="right"> */}
                  <MDBNavItem active>
                    <MDBNavLink className="nav-option" to="#">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink className="nav-option" to="#">About</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink className="nav-option" to="#">Medicines</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink className="nav-option" to="#">Contact</MDBNavLink>
                  </MDBNavItem>
                  {/* </div> */}
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>
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
              <h2 className="caption-header">Medicines </h2>
              <h5>It keeps us alive and be there for our loved ones.</h5>
              <p>Software that helps everyone to be healthy and make things easier.</p>
                <MDBBtn outline size="lg" className="mt-3" color="white">Get Started</MDBBtn>
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
                  <h2 className="caption-header">Where Lives &<br/> Medicines Matter</h2>
                  <h4>Essential to humanity's survival.</h4>
                  <p>God gave us life, therefore do not waste life. Preserve it!</p>
                  <div className="d-flex justify-content-center">
                    <div className="p-2 text-left"><MDBBtn size="lg" className="mt-3" outline color="white">Read More</MDBBtn></div>
                    <div className="p-2 text-left"><MDBBtn size="lg" className="mt-3" outline color="white">Contact Us</MDBBtn></div>
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
                <h2 className="caption-header"><span className="guide-h">Guiding you</span><br/>every step of the way</h2>
                <h4>Reliable. Effecient. Easy To Use</h4>
                <p>This Software is designed to help you live a healthy life.</p>
              </MDBMask>
            </MDBView>
          </MDBCarouselItem>
          </MDBCarouselInner>
          </MDBCarousel>        
        </header>
      </div>
    );
  }
}

export default Navbar;