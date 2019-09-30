import React, { Component } from "react";
import Breadcrumb from './Breadcrumb'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import { Formik } from 'formik';
import { Redirect } from "react-router-dom";
import GoogleLogin from 'react-google-login';
import auth from "../auth";

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: {
                username: '',
                password: '',
                },
            existUser: [],
            error: '',
            location: props
        }
    }

    async componentDidMount(){
        const settings ={
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        };
        try{
            const user = await fetch(`/users`, settings);
            const data = await user.json();
            this.setState({existUser: data}); 
        }catch(error) {
            console.log('Request failed', error);
        }           
    }

    loginUser = (user) =>{
       /* const settings ={
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: `username=${user.username}&password=${user.password}`
        };
        try{
            const login = await fetch(`/login`, settings);
            const data = await login.json();
            console.log('Request succeeded with JSON response', data);
        }catch(error) {
            console.log('Request failed', error);
        }

*/
        fetch('/login', {
            method: 'POST',
            credentials: 'include',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `username=${user.username}&password=${user.password}`
        })
        .then(response => response.json())
        .then(data => {
            console.log('Request succeeded with JSON response', data);
        })
        .catch(error => {
            console.log('Request failed', error);
        });
    }

    googleResponse = (response) =>{
        console.log(response);
    }

   

render(){
    const existUser = this.state.existUser;       
    const location = this.state.location;

    if(auth.isAuthenticated()){
        return <Redirect to="/medicines-shop" /> 
     }
        return (
      <div>
        <Breadcrumb bheader="Sign In" bcurrent="Login"/>
        <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={(values, {setSubmitting}) =>{
        var foundUsername = existUser.find(obj => obj.username === values.username);
        var foundPassword = existUser.find(obj => obj.password === values.password);
            this.setState({user: values});
        if(!foundUsername){
            this.setState({error: 'username not exist'});
            setTimeout(() => {
                this.setState({error: ''});
                setSubmitting(false);
            }, 1000);
        }else if(!foundPassword){
            this.setState({error: 'wrong password'});
            setTimeout(() => {
                this.setState({error: ''});
                setSubmitting(false);
            }, 1000);
        }else{
            this.loginUser(values);
            auth.login(() =>{
                location.history.push("/medicines-shop");
            });
            setSubmitting(true);
        
        }
            
        }}
        >
        { props =>{
            const { values, isSubmitting, handleChange, handleBlur, handleSubmit} = props
        return (
            <MDBContainer className="l-container"> 
            <MDBRow>
                <MDBCol md="6">
                    <div className="login-header-container">
                        <h1 className="login-d-header">Login</h1>
                        <p className="login-d-content">Don't have an account?
                        <br/>Just sign up in a minute
                        </p>
                        <MDBBtn size="lg" href="/sign-up" outline color="info">SIGN UP</MDBBtn>
                    </div>
                </MDBCol>
                <MDBCol md="6">
                <MDBCard>
                    <MDBCardBody>
                    <form onSubmit={handleSubmit}>
                        <div className="grey-text">
                        <MDBInput
                            label="Enter your Username"
                            icon="user"
                            group
                            type="text"
                            validate
                            error="wrong"
                            success="right"
                            name="username"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.username}
                        />
                        <MDBInput
                            label="Your password"
                            icon="lock"
                            group
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            validate
                        />
                        {this.state.error}
                        
                        <a className="login-pass-forgot" href="login/forgot-password">Forgot Password</a>
                        </div>                    
                        <div className="text-center py-4 mt-3">
                        <MDBBtn className="login-bbn-f" style={{'font-weight':'bold','letter-spacing':'0.02em'}} color="primary" type="submit" disabled={isSubmitting}>
                            Login
                        </MDBBtn>
                        <div hidden class="spinner-border text-info">
                            <span class="sr-only"></span>
                        </div>
                        <GoogleLogin 
                        clientId="970375496792-d24stsst2ec6dgnf03gf751829redm6k.apps.googleusercontent.com"
                        render={renderProps =>(
                            <MDBBtn className="login-bbn-f" style={{'font-weight':'bold','letter-spacing':'0.02em'}} color="danger" type="submit" disabled={isSubmitting} onClick={renderProps.onClick}>
                            <MDBIcon
                            fab
                            icon="google"
                            className="icon-m"
                            ></MDBIcon>
                            Sign In with google
                        </MDBBtn>
                        )}
                        buttonText="Login"
                        onSuccess={this.googleResponse}
                        onFailure={this.googleResponse}
                     
                        />
                        
                        </div>
                    </form>
                    </MDBCardBody>
                </MDBCard>
                </MDBCol>
            </MDBRow>
            </MDBContainer>
        );
        }}
        </Formik>
        </div>
        );
     }
};
export default Login;