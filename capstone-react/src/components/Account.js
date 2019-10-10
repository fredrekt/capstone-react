import React, { Component } from 'react'
import Breadcrumb from './Breadcrumb'
import { MDBContainer, MDBJumbotron, MDBInput, 
    MDBBtn, MDBCard, MDBCol, MDBRow } from 'mdbreact'

class Account extends Component{
    constructor(props){
        super(props)
        this.state = {
            user:[],
            userid:{
                password: '',
                fullname: '',
                email: '',
                bdate: '',
                gender: '',
                postal: ''
            }
        }
    }
    componentDidMount(){
        fetch('/account')
        .then(res => res.json())
        .then(user => this.setState({user}))
    }
    handleUpdateUser = (user) =>{
        fetch('/account/update', {
            method: 'POST',
            credentials: 'include',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `password=${user.password}, fullname=${user.fullname},
                   email=${user.email}, bdate=${user.bdate}, gender=${user.gender}&
                   postal=${user.postal}`
        })
        .then(res => res.json())
        .then(data => {
            console.log('Request succeeded with JSON response', data)
        })
        .catch(error =>{
            console.log('Request failed',error)
        })
    }
    render(){
        return(
            <div>
                <Breadcrumb bheader="Edit Profile" bcurrent="Your Account" />
                <div className="text-center">
                    <h1 className="account-h">Personal Information</h1>
                </div>
                    <div className="account-container">
                        <MDBContainer>
                            {this.state.user.map(user =>
                            <MDBJumbotron key={user.username}>
                            <h4>Payment Records</h4>
                            <MDBRow>
                                <MDBCol>
                                    <MDBCard hover>
                                        <div className="pay-container-deets">
                                            <h4 className="pay-c-h">Americian Express</h4>
                                            <p className="grey-text">
                                                <strong>Fredrick John Garingo</strong>
                                                <br/>
                                                <span className="pay-subheader">1189-7813-0921-****</span>
                                                <br/>
                                                ***
                                            </p>
                                            <div className="pay-card-icon">
                                                <img width="10%" 
                                                    src="data:image/png;base64,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"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol>
                                    <MDBCard hover>
                                        <div className="pay-container-deets">
                                            <h4 className="pay-c-h">Visa Mastercard</h4>
                                            <p className="grey-text">
                                                <strong>John Romer Donaire</strong>
                                                <br/>
                                                <span className="pay-subheader">0084-5671-9810-****</span>
                                                <br/>
                                                ***
                                            </p>
                                            <div className="pay-card-icon">
                                                <img width="10%" src="https://cdn1.iconfinder.com/data/icons/credit-card-icons/512/master.png" alt=""/>
                                            </div>
                                        </div>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                           
                            <MDBRow>
                                <MDBCol>
                                    <MDBInput 
                                    label="username"
                                    icon="user" 
                                    value={user.username}
                                    style={{'width':'50%'}}
                                    />
                                </MDBCol>
                                <MDBCol>
                                    <MDBInput 
                                    label="password"
                                    value={user.password}
                                    icon="lock" 
                                    style={{'width':'50%'}}
                                    />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol>
                                    <MDBInput 
                                    label="full name"
                                    value={user.full_name}
                                    icon="user" 
                                    style={{'width':'50%'}}
                                    />
                                </MDBCol>
                                <MDBCol>
                                    <MDBInput 
                                    label="email"
                                    value={user.email}
                                    icon="envelope" 
                                    style={{'width':'50%'}}
                                    />
                                </MDBCol>
                            </MDBRow>
                            <h4>User Location</h4>
                            <MDBRow>
                                <MDBCol>  
                                    <MDBInput 
                                    label="date of birth"
                                    value={user.date_of_birth}
                                    icon="calendar" 
                                    style={{'width':'50%'}}
                                    />
                                </MDBCol>
                                <MDBCol>
                                    <MDBInput 
                                    label="gender"
                                    value={user.gender}
                                    icon="male" 
                                    style={{'width':'40%'}}
                                    />
                                </MDBCol>
                                <MDBCol>
                                    <MDBInput 
                                    label="location"
                                    value={user.location_code}
                                    icon="map-marked-alt" 
                                    style={{'width':'50%'}}
                                    />
                                </MDBCol>
                            </MDBRow>
                        

                               <MDBBtn size="md" color="primary">
                                    Update Profile
                               </MDBBtn>
                        
                            </MDBJumbotron>
                            )}
                        </MDBContainer>
                    </div>
            </div>
        )
    }
}
export default Account