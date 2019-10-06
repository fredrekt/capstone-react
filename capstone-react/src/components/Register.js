// import React, { Component } from "react"
// import Breadcrumb from './Breadcrumb'
// import { MDBAlert, MDBIcon, MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
// import { MDBAnimation } from "mdbreact"
// class Register extends Component{
//     render(){
//         return(
//             <div>
//                 <Breadcrumb bheader="Sign Up" bcurrent="Register"/>
//                     <MDBContainer className="l-container"> 
//                         <MDBRow>
//                             <MDBCol md="6">
//                                 <div className="register-header-container">
//                                     <MDBAnimation type="slideInLeft">
//                                     <h1 className="register-d-header">Sign Up</h1>
//                                     </MDBAnimation> 
//                                     <p className="register-d-content">Already have an account?
//                                     <br/>Just sign in in a second
//                                     </p>
//                                     <MDBAnimation type="rollIn">
//                                     <MDBBtn href="/sign-in" size="lg" outline color="success">SIGN IN</MDBBtn>
//                                     </MDBAnimation>
//                                 </div>
//                             </MDBCol>
//                             <MDBCol md="6">
//                                 <MDBAnimation type="slideInUp">
//                                     <MDBContainer>
//                                         <MDBAlert color="success" dismiss>
//                                             <strong>Hello Stranger!</strong> Lets get to know each other! <MDBIcon far icon="grin-beam-sweat" />
//                                         </MDBAlert>
//                                     </MDBContainer>
//                                 </MDBAnimation>
//                             <MDBCard>
//                                 <MDBCardBody>
//                                 <form>
//                                     <div className="grey-text">
//                                     <MDBInput
//                                         label="Your Username"
//                                         icon="user"
//                                         group
//                                         type="text"
//                                         validate
//                                         error="wrong"
//                                         success="right"
//                                     />
//                                     <MDBInput
//                                         label="Your password"
//                                         icon="lock"
//                                         group
//                                         type="password"
//                                         validate
//                                     />
//                                     {/* <MDBInput
//                                         label="Your Full Name"
//                                         icon="address-card"
//                                         group
//                                         type="text"
//                                         validate
//                                         error="wrong"
//                                         success="right"
//                                     /> */}
//                                     <MDBInput
//                                         label="Your Email"
//                                         icon="envelope"
//                                         group
//                                         type="email"
//                                         validate
//                                         error="wrong"
//                                         success="right"
//                                     />
//                                     {/* <MDBInput
//                                         label="Your Birth Date"
//                                         icon="calendar"
//                                         group
//                                         type="date"
//                                         validate
//                                         error="wrong"
//                                         success="right"
//                                     />
//                                     <MDBInput
//                                         label="Your Gender"
//                                         icon="transgender-alt"
//                                         group
//                                         type="text"
//                                         validate
//                                         error="wrong"
//                                         success="right"
//                                     />
//                                     <MDBInput
//                                         label="Your Location Code"
//                                         icon="map-marked-alt"
//                                         group
//                                         type="text"
//                                         validate
//                                         error="wrong"
//                                         success="right"
//                                     /> */}
//                                     </div>
//                                     <div className="text-center py-4 mt-3">
//                                     <MDBBtn className="login-bbn-f" style={{'font-weight':'bold','letter-spacing':'0.02em'}} color="success" type="submit">                 
//                                         Create Account
//                                         <div hidden class="spinner-border spinner-border-sm text-white ml-2" role="status"> 
//                                             <span class="sr-only"></span>
//                                         </div>
//                                     </MDBBtn>
//                                     </div>
//                                 </form>
//                                 </MDBCardBody>
//                             </MDBCard>
//                             </MDBCol>
//                         </MDBRow>
//                     </MDBContainer>
//             </div>
//         )
//     }
// }
// export default Register

import React, { Component } from "react"
import Breadcrumb from './Breadcrumb'
import { MDBAlert, MDBIcon, MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import { MDBAnimation } from "mdbreact"
import { Formik } from 'formik'
import * as Yup from 'yup'


class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: {
                username: '',
                password: '',
                email: '',
                },
            existUser: [],
            error: '',
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

    register = (user) =>{   
         fetch('/register', {
             method: 'POST',
             credentials: 'include',
             headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
             body: `username=${user.username}&password=${user.password}&email=${user.email}`
         })
         .then(response => response.json())
         .then(data => {
             console.log('Request succeeded with JSON response', data);
         })
         .catch(error => {
             console.log('Request failed', error);
         });
     }

    render(){

        const SignupSchema = Yup.object().shape({
            username: Yup.string()
              .min(2, 'Too Short!')
              .max(50, 'Too Long!')
              .required('Required'),
            password: Yup.string()
              .min(2, 'Too Short!')
              .max(50, 'Too Long!')
              .matches(
                /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                "Minimum eight characters, at least one letter and one number")
              .required('Required'),
            email: Yup.string()
              .email('Invalid email')
              .required('Required'),
          });

          const existUser = this.state.existUser;

        return(
            <div>
                <Breadcrumb bheader="Sign Up" bcurrent="Register"/>
                <Formik
                    initialValues={{username: '', password: '', email: ''}}
                    validationSchema={SignupSchema}
                    onSubmit={(values, {setSubmitting}) =>{
                    var foundUsername = existUser.find(obj => obj.username === values.username);
                    var foundEmail = existUser.find(obj => obj.email === values.email);
                    this.setState({user: values});
                if(foundUsername){
                    this.setState({error: 'Username Already Exist'});
                    setTimeout(() => {
                    this.setState({error: ''});
                    setSubmitting(false);
                }, 1000);
                }else if(foundEmail){
                    this.setState({error: 'Email Already Exist'});
                    setTimeout(() => {
                    this.setState({error: ''});
                    setSubmitting(false);
                }, 1000);
                }else{
                    this.register(values);
                    setSubmitting(true);        
        }
            
        }}
        >
        { props =>{
            const { values, isSubmitting, handleChange, handleBlur, handleSubmit, touched, errors} = props
        return (
        
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
                                <MDBAnimation type="slideInUp">
                                    <MDBContainer>
                                        <MDBAlert color="success" dismiss>
                                            <strong>Hello Stranger!</strong> Lets get to know each other! <MDBIcon far icon="grin-beam-sweat" />
                                        </MDBAlert>
                                    </MDBContainer>
                                </MDBAnimation>
                            <MDBCard>
                                <MDBCardBody>
                                <form onSubmit={handleSubmit}>
                                    <div className="grey-text">
                                    <MDBInput
                                        label="Your Username"
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
                                    {this.state.error}
                                    {errors.username && touched.username && <div>{errors.username}</div>}
                                    <MDBInput
                                        label="Your password"
                                        icon="lock"
                                        group
                                        type="password"
                                        validate
                                        name="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                    />
                                    {errors.password && touched.password && <div>{errors.password}</div>}
                                    <MDBInput
                                        label="Your Email"
                                        icon="envelope"
                                        group
                                        type="email"
                                        validate
                                        error="wrong"
                                        success="right"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                    {this.state.error}
                                    {errors.email && touched.email && <div>{errors.email}</div>}
                                    </div>
                                    <div className="text-center py-4 mt-3">
                                    <MDBBtn className="login-bbn-f" style={{'font-weight':'bold','letter-spacing':'0.02em'}} color="success" type="submit" disabled={isSubmitting}>                 
                                        Create Account
                                        <div hidden class="spinner-border spinner-border-sm text-white ml-2" role="status"> 
                                            <span class="sr-only"></span>
                                        </div>
                                    </MDBBtn>
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
        )
    }
}
export default Register