import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MDBInput, MDBNavbar, MDBNavbarNav, MDBNavItem, 
    MDBNavLink, MDBDropdown, MDBDropdownToggle, 
    MDBDropdownMenu, MDBDropdownItem, MDBIcon, 
    MDBSideNavItem, MDBSideNavCat, MDBSideNavNav, 
    MDBSideNav, MDBContainer,
    MDBListGroup, MDBListGroupItem } from "mdbreact";
import { BrowserRouter } from 'react-router-dom';
import { MDBNav, MDBRow, MDBCol } from "mdbreact";
import Breadcrumb  from '../components/Breadcrumb';
class AdminController extends React.Component {
    render(){
        return(
            <div>
                <Breadcrumb bheader="header" bcurrent="heh"/>
                    <BrowserRouter>
                        <Route path="/admin/pending" Component={Breadcrumb}/>


                            <MDBRow>
                            <MDBCol>
                            <div style={{'background':'grey', 'width':'15%'}}>
                                <MDBNav className="flex-column">
                                <MDBNavItem>
                                    <MDBNavLink style={{'color':'black'}} active to="#!">Active</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink style={{'color':'black'}}to="/admin/pending">Link</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink style={{'color':'black'}} to="#!">Link</MDBNavLink>
                                </MDBNavItem>
                                </MDBNav>
                            </div>
                            </MDBCol>
                            <MDBCol>
                                <MDBContainer>
                                    <p>hello World</p>
                                </MDBContainer>
                            </MDBCol>
                            </MDBRow>
                    </BrowserRouter>
            </div>
        )
    }
}

export default AdminController;