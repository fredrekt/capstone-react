import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import './Styles.css'
import car1 from './img/bg-2.jpeg'
import car2 from './img/item3.jpg'
import car3 from './img/bg-3.jpeg'
import Carousel from './Carousel';

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
            <MDBNavbar color="elega" fixed="top" dark expand="md" scrolling transparent>
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
              <MDBMask overlay="black-light" className="flex-center flex-column text-white text-center">
                  <h2 className="caption-header">Life is Gold</h2>
                  <h4>Every air that you breathe is precious.</h4>
                  <p>God gave us life, therefore do not waste life. Preserve it!</p>

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
                <h2>Sample Text Header</h2>
                <h4>Second Text</h4>
                <p>Lorem ipsum dolor wasd alrem sads, sfedred fredirckjohn garingo is a great goat.</p>
              </MDBMask>
            </MDBView>
          </MDBCarouselItem>
          </MDBCarouselInner>
          </MDBCarousel>
        
          
        </header>

        <main>
          <MDBContainer className="text-center my-5">
            <p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </MDBContainer>
        </main>
      </div>
    );
  }
}

export default Navbar;