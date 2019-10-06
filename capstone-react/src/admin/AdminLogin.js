import React, { Component } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import { MDBContainer, MDBRow, MDBCol, 
    MDBAnimation, MDBBtn, MDBIcon, MDBCard, MDBAlert,
    MDBInput, MDBCardBody
}
    from 'mdbreact'
import { ToastContainer } from 'react-toastify'

class Admin extends Component{
    constructor(props){
        super(props)
        this.state = {
            user:{
                username: '',
                password: ''
            },
            loginname: 'login'
        }
    }
    render(){
        return(
            <div>
                <Breadcrumb bheader="Admin Access" bcurrent="Admin"/>
                <MDBContainer className="l-container"> 
            <MDBRow>
                <MDBCol md="6">
                    <div className="login-header-container">
                        <MDBAnimation type="fadeInDown">
                                <h1 className="admin-login-d-header">Login</h1>
                        </MDBAnimation>
                        <p className="login-d-content">Don't have an account?
                        <br/>Just sign up in a minute
                        </p>
                        <MDBAnimation type="tada">
                        <MDBBtn size="lg" href="/admin-register" outline color="success">SIGN UP</MDBBtn>
                        </MDBAnimation> 
                    </div>
                </MDBCol>
                <MDBCol md="6">
                <MDBAnimation type="slideInUp">
                            <MDBContainer>
                                <MDBAlert color="warning" dismiss>
                                    <strong>Welcome Friend!</strong> We need you to run this application
                                </MDBAlert>
                            </MDBContainer>
                        </MDBAnimation>
                <MDBCard>
                    <MDBCardBody>
                    <form onSubmit="">
                        <div className="grey-text">
                        <MDBInput
                            label="Your username"
                            icon="user"
                            group
                            type="text"
                            validate
                            
                            error="wrong"
                            success="right"
                            name="username"
                            onChange=""
                            onBlur=""
                            value=""
                        />
                        <MDBInput
                            label="Your password"
                            icon="lock"
                            group
                            
                            type="password"
                            name="password"
                            onChange=""
                            onBlur=""
                            value=""
                            validate
                        />
                        {/* alert */}
                        
                        <a className="login-pass-forgot" href="login/forgot-password">Forgot Password</a>
                        </div>                    
                        <div className="text-center py-4 mt-3">
                        <MDBBtn className="login-bbn-f" style={{'font-weight':'bold','letter-spacing':'0.02em'}} color="success" type="submit" disabled="">
                           <div className="white-text">
                           {this.state.loginname}
                            </div>
                        </MDBBtn>
                        <div hidden class="spinner-border text-info">
                            <span class="sr-only"></span>
                        </div>
                            <MDBBtn className="login-bbn-f" style={{'font-weight':'bold','letter-spacing':'0.02em'}} color="primary" type="submit" disabled="" onClick="">
                            <MDBIcon
                            fab
                            icon="facebook-square"
                            size="lg"
                            className="icon-fb"
                            />
                            Sign In with facebook
                        </MDBBtn>                        
                        </div>
                    </form>
                    <ToastContainer />
                    </MDBCardBody>
                </MDBCard>
                </MDBCol>
            </MDBRow>
            </MDBContainer>
            </div>
        )
    }
}
export default Admin