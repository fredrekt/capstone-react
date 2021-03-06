import React from 'react';
import { MDBBadge, MDBIcon, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import './Styles.css'
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact"
import { Link } from 'react-router-dom'

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
  // state = {
  //   color: 'white'
  // }

  // listenScrollEvent = e => {
  //   if (window.scrollY > 500) {
  //     this.setState({color: 'black'})
  //   } else {
  //     this.setState({color: 'white'})
  //   }
  // }

  // componentDidMount() {
  //   window.addEventListener('scroll', this.listenScrollEvent)
  // }

  render() {
    return (
      <div>
        <header>
            <MDBNavbar color="elegant-color" fixed="top" expand="md" scrolling dark transparent>
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
                    <MDBNavLink style={{color:this.state.color}} className="nav-option" to="/medicines">Medicines</MDBNavLink>
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

                  <MDBNavItem>
                    <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      {/* <MDBNavLink style={{color:this.state.color}}  className="nav-option" to="/sign-in"><MDBIcon size="lg" icon="shopping-cart" /><MDBBadge color="danger" className="ml-2">0</MDBBadge></MDBNavLink> */}
                      <Link className="white-text" to="/cart">
                        <MDBIcon size="lg" icon="shopping-cart" /><MDBBadge color="danger" className="ml-2">0</MDBBadge>
                      </Link>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem>
                       <Link to="/my-account">
                       Account
                       </Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <Link to="/help">
                        Help
                        </Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <Link to="/">
                        Logout
                        </Link>
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                    </MDBDropdown>
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