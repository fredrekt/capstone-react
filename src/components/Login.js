import React from "react";
import Breadcrumb from './Breadcrumb'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import { MDBAnimation } from "mdbreact"
const Login = () => {
  return (
      <div>
        <Breadcrumb bheader="Sign In" bcurrent="Login"/>
        <MDBContainer className="l-container"> 
        <MDBRow>
            <MDBCol md="6">
                <div className="login-header-container">
                    <MDBAnimation type="fadeInDown">
                    <h1 className="login-d-header">Login</h1>
                    </MDBAnimation>
                    <p className="login-d-content">Don't have an account?
                    <br/>Just sign up in a minute
                    </p>
                    <MDBAnimation type="tada">
                    <MDBBtn size="lg" href="/sign-up" outline color="info">SIGN UP</MDBBtn>
                    </MDBAnimation>
                </div>
            </MDBCol>
            <MDBCol md="6">
            <MDBCard>
                <MDBCardBody>
                <form>
                    <div className="grey-text">
                    <MDBInput
                        label="Your name"
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
                    <a className="login-pass-forgot" href="login/forgot-password">Forgot Password</a>
                    </div>                    
                    <div className="text-center py-4 mt-3">
                    <MDBBtn className="login-bbn-f" style={{'font-weight':'bold','letter-spacing':'0.02em'}} color="primary" type="submit">
                        Login
                    </MDBBtn>
                    <div hidden class="spinner-border text-info">
                        <span class="sr-only"></span>
                    </div>
                    <MDBBtn className="login-bbn-f" style={{'font-weight':'bold','letter-spacing':'0.02em'}} color="danger" type="submit">
                        <MDBIcon
                        fab
                        icon="google"
                        className="icon-m"
                        ></MDBIcon>
                        Sign In with google
                    </MDBBtn>
                    </div>
                </form>
                </MDBCardBody>
            </MDBCard>
            </MDBCol>
        </MDBRow>
        </MDBContainer>
    </div>
  );
};

export default Login;