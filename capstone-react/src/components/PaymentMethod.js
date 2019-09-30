import React, { Component } from 'react'
import Breadcrumb from './Breadcrumb'
import { MDBIcon, MDBContainer, MDBCol, MDBRow, MDBCard, MDBJumbotron } from 'mdbreact'
class PaymentMethod extends Component{
    render() {
        return (
            <div>
            <Breadcrumb bheader="Payment Method" bcurrent="Transaction" />
                <div className="container-payment-icons">
                    <h1 className="text-center">Payment Options</h1>
                    <MDBJumbotron>
                    <MDBContainer>
                        <MDBRow style={{'text-align':'center'}}>                            
                            <MDBCol md="3">
                                <MDBIcon className="fa-5x blue-text" fab icon="cc-paypal" />    
                            </MDBCol>
                            <MDBCol md="3">
                        <MDBIcon className="fa-5x black-text"  fab icon="cc-visa" />
                            </MDBCol>
                            <MDBCol>
                        <MDBIcon className="fa-5x yellow-text" fab icon="cc-mastercard" />
                        </MDBCol>
                        <MDBCol>
                        <MDBIcon className="fa-5x black-text" fab icon="cc-amazon-pay" />
                        </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    </MDBJumbotron>
                </div>
            </div>
        )
    }
}
export default PaymentMethod