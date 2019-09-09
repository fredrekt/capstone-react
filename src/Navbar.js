import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import './Styles.css'
import { MDBBtn } from "mdbreact";

import { MDBCarousel, MDBCarouselInner, MDBCarouselItem } from
"mdbreact";

import HomeComponent from './components/HomeComponent'
import AboutComponent from './components/AboutComponent'

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
  handleScroll(){
    this.setState({
      color:'black',
    });
  }
  state = {
    color: 'white'
  }

  listenScrollEvent = e => {
    if (window.scrollY > 500) {
      this.setState({color: 'black'})
    } else {
      this.setState({color: 'white'})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  render() {
    return (
      <div>
        <header>
            <MDBNavbar color="eleg" fixed="top" expand="md" scrolling dark transparent>
              <MDBNavbarBrand href="/">
                <strong style={{color:this.state.color}} id="nav-brand">Medishop</strong>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav right>
                    {/* <div className="right"> */}
                  <MDBNavItem active>
                    <MDBNavLink style={{color:this.state.color}} className="nav-option" to="/">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink style={{color:this.state.color}} className="nav-option" to="/about">About</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink style={{color:this.state.color}} className="nav-option" to="/medicines-shop">Medicines</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink style={{color:this.state.color}} className="nav-option" to="/contact">Contact</MDBNavLink>
                  </MDBNavItem>
                  {/* </div> */}
                  <MDBNavItem>
                    <MDBNavLink hidden style={{color:this.state.color}}  className="nav-option" to="/sign-in">Login</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink hidden style={{color:this.state.color}}  className="nav-option" to="/sign-up">Register</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink hidden style={{color:this.state.color}}  className="nav-option" to="/sign-in">Logout</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
        </header>
      </div>
    );
  }
}

export default Navbar;