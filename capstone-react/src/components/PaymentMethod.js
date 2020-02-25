import React, { Component } from 'react'
import Breadcrumb from './Breadcrumb'
import { MDBIcon, MDBContainer, MDBCol, MDBRow, MDBCard, MDBJumbotron, MDBCardText, MDBAlert, MDBAnimation } from 'mdbreact'

//bs stepper
import 'bs-stepper/dist/css/bs-stepper.min.css';
import Stepper from 'bs-stepper'
import PaypalButton from './PaypalButton';

class PaymentMethod extends Component{
    constructor() {
        super();
        this.state = {
          name: 'React',
          display: 'none',
          price: null
        };
      }
    
      componentDidMount() {
        this.stepper = new Stepper(document.querySelector('#stepper1'), {
          linear: false,
          animation: true
        })
        fetch('/cart/cartTotalPrice')
        .then(res=>res.json())
        .then(price => this.setState({price}))
      }
    
      onSubmit(e) {
        e.preventDefault()
      }
    render() {
        return (
            <div>
            <Breadcrumb bheader="Payment Method" bcurrent="Transaction" />
                <div className="container-payment-icons">
                    <h1
                    className="comp-header text-center"
                    style={{'font-size':'45px'}}
                    >Payment Options</h1>
                    <MDBContainer>
                        <MDBJumbotron>
                        <div>
                            <p className="grey-text text-center">
                                Please select payment method
                            </p>
                            {/* <Hello name={this.state.name} /> */}
                            <div id="stepper1" class="bs-stepper">
                            <div class="bs-stepper-header">
                                <div class="step" data-target="#test-l-1">
                                <button class="step-trigger">
                                    <span class="bs-stepper-circle">1</span>
                                    <span class="bs-stepper-label">Payment</span>
                                </button>
                                </div>
                                <div class="line"></div>
                                <div class="step" data-target="#test-l-2">
                                <button class="step-trigger">
                                    <span class="bs-stepper-circle">2</span>
                                    <span class="bs-stepper-label">Processing</span>
                                </button>
                                </div>
                                <div class="line"></div>
                                <div class="step" data-target="#test-l-3">
                                <button class="step-trigger">
                                    <span class="bs-stepper-circle">3</span>
                                    <span class="bs-stepper-label">Validation</span>
                                </button>
                                </div>
                            </div>
                            <div class="bs-stepper-content">
                                <form onSubmit={this.onSubmit}>
                                <div id="test-l-1" class="content">
                                    <div class="form-group">
                                        <MDBContainer>
                                            <MDBRow>
                                                <MDBCol className="text-center">
                                                    <a onClick={
                                                    ()=>{
                                                        document.getElementById('pp-option').style.display = "inline"
                                                        this.stepper.next()
                                                    }
                                                }>
                                                    <MDBIcon className="blue-text" fab size="5x" icon="cc-paypal" />
                                                    <p className="sub-header-payments text-center grey-text">Paypal</p>
                                                    </a>
                                                </MDBCol>
                                                
                                                <MDBCol className="text-center">
                                                <a onClick={
                                                    ()=>{
                                                        document.getElementById('err-option').style.display = "inline"
                                                        this.stepper.next()
                                                    }
                                                }>
                                                    <MDBIcon fab size="5x" icon="cc-amazon-pay" />
                                                    <p className="sub-header-payments text-center grey-text">Amazon Pay</p>
                                                </a>
                                                </MDBCol>
                                                <MDBCol className="text-center">
                                                <a onClick={
                                                    ()=>{
                                                        document.getElementById('err-option').style.display = "inline"
                                                        this.stepper.next()
                                                    }
                                                }>
                                                    <MDBIcon fab className="yellow-text" size="5x" icon="cc-mastercard" />
                                                    <p className="sub-header-payments text-center grey-text">Mastercard</p>
                                                </a>
                                                </MDBCol>
                                                <MDBCol className="text-center">
                                                <a onClick={
                                                    ()=>{
                                                        document.getElementById('cod-option').style.display = "inline"
                                                        this.stepper.next()
                                                    }
                                                }>
                                                    <MDBIcon className="green-text" size="5x" icon="money-bill-alt" />
                                                    <p className="sub-header-payments text-center grey-text">Cash on Delivery</p>
                                                </a>
                                                </MDBCol>
                                            </MDBRow>
                                        </MDBContainer>
                                    </div>
                                    {/* <button class="btn btn-primary" onClick={() => this.stepper.next()}>Next</button> */}
                                </div>
                                <div id="test-l-2" class="content">
                                    <div class="form-group">
                                        <div id="pp-option" style={{'display': this.state.display}}>
                                            <MDBContainer className="text-center mt-3 mb-2">
                                                <PaypalButton money={this.state.price}/>
                                            </MDBContainer>
                                        </div>
                                    <div id="cod-option" style={{'display':this.state.display}}>
                                        <MDBContainer className="text-center mt-3 mb-2">
                                            <h3>Cash on Delivery</h3>
                                            <p className="grey-text">
                                                You have selected Cash on Delivery
                                            </p>
                                                <MDBCard className="p-3">
                                                    <MDBCardText>
                                                    Pay using our Cash on Delivery Service. Medishop, and its sellers, will NEVER ask you to send cash or deposit any payment (partial or full) to any personal bank account or remittance centers. Full payment is done directly to the courier upon receiving the item.
                                                    Thank you for using Medishop's Services, have a nice day!
                                                    </MDBCardText>
                                                </MDBCard>
                                        </MDBContainer>
                                        </div>
                                        <div id="err-option" style={{'display': this.state.display}}>
                                            <MDBContainer>
                                                <MDBAnimation type="bounceInUp">   
                                                    <div id="err-option">
                                                    <MDBAlert color="danger" dismiss>
                                                        The payment option that you have selected is currently not available. <a onClick={()=>{this.stepper.previous()
                                                            document.getElementById('err-option').style.display = "none"}} className="alert-link">Select another payment option</a>
                                                    </MDBAlert>
                                                    </div>
                                                </MDBAnimation>
                                            </MDBContainer>
                                        </div>
                                    
                                    </div>
                                    <button class="btn btn-primary" onClick={() => this.stepper.next()}>Next</button>
                                </div>
                                <div id="test-l-3" class="content text-center">
                                    <button type="submit" class="btn btn-success btn-md mt-5">Submit</button>
                                </div>
                                </form>
                            </div>
                            </div>
                        </div>


                        </MDBJumbotron>
                    </MDBContainer>
                </div>
            </div>
        )
    }
}
export default PaymentMethod