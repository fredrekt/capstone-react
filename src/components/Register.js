import React, { Component } from "react"
import Breadcrumb from './Breadcrumb'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import { MDBAnimation } from "mdbreact"
class Register extends Component{
    render(){
        return(
            <div>
                <Breadcrumb bheader="Sign Up" bcurrent="Register"/>
                    <MDBContainer className="l-container"> 
                        <MDBRow>
                            <MDBCol md="6">
                                <div className="register-header-container">
                                    <MDBAnimation type="slideInLeft">
                                    <h1 className="register-d-header">Sign Up</h1>
                                    </MDBAnimation> 
                                    <p className="register-d-content">Already have an account?
                                    <br/>Just sign in in a second
                                    </p>
                                    <MDBAnimation type="rollIn">
                                    <MDBBtn href="/sign-in" size="lg" outline color="success">SIGN IN</MDBBtn>
                                    </MDBAnimation>
                                </div>
                            </MDBCol>
                            <MDBCol md="6">
                            <MDBCard>
                                <MDBCardBody>
                                <form>
                                    <div className="grey-text">
                                    <MDBInput
                                        label="Your Username"
                                        icon="user"
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />
                                    <MDBInput
                                        label="Your password"
                                        icon="lock"
                                        group
                                        type="password"
                                        validate
                                    />
                                    {/* <MDBInput
                                        label="Your Full Name"
                                        icon="address-card"
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                    /> */}
                                    <MDBInput
                                        label="Your Email"
                                        icon="envelope"
                                        group
                                        type="email"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />
                                    {/* <MDBInput
                                        label="Your Birth Date"
                                        icon="calendar"
                                        group
                                        type="date"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />
                                    <MDBInput
                                        label="Your Gender"
                                        icon="transgender-alt"
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />
                                    <MDBInput
                                        label="Your Location Code"
                                        icon="map-marked-alt"
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                    /> */}
                                    </div>
                                    <div className="text-center py-4 mt-3">
                                    <MDBBtn className="login-bbn-f" style={{'font-weight':'bold','letter-spacing':'0.02em'}} color="success" type="submit">
                                        Create Account
                                    </MDBBtn>
                                    </div>
                                </form>
                                </MDBCardBody>
                            </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
            </div>
        )
    }
}
export default Register