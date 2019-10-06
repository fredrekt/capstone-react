// import React, { Component } from 'react'
// import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBCard, MDBCardText, MDBCardBody, MDBCardTitle, MDBCardImage, MDBIcon, MDBAlert, MDBAnimation } from 'mdbreact' 
// import Breadcrumb from './Breadcrumb'
// import biogesic from '../img/meds-bio.jpeg'
// import biogesic2 from '../img/meds-sample-pic-2.jpeg'
// import biogesic3 from '../img/meds-sample-pic-3.jpeg'
// import biogesic4 from '../img/meds-sample-pic-4.jpeg'
// import phlogo from '../img/ph-flag.png'
// import ScrollButton from './ScrollButton'

// class Cart extends Component{
//     render(){
//         return(
//             <div>
//                 <Breadcrumb bheader="Shopping Cart" bcurrent="Cart" />
//                     <div className="cart-container"> 
//                         <MDBAnimation type="slideInUp">  
//                             <MDBContainer>
//                                 <MDBAlert color="success" dismiss>
//                                 <strong>This is your cart!</strong> The items that wished to buy are all here, last final step to obtain items is payment.
//                                 </MDBAlert>
//                             </MDBContainer>
//                         </MDBAnimation>
//                         <MDBContainer>
//                             <h1 className="cart-header">
//                                 Your Cart
//                             </h1>
//                             <p className="cart-sub-h grey-text">
//                                 You have 3 iems in your cart
//                             </p>
//                             <MDBRow>
//                                 <MDBCol>
//                                     <div className="cart-item-container">
//                                         <img className="cart-img rounded" src={biogesic}/>
//                                         <h4 className="cart-item-name">Neosep</h4>
//                                         <p className="cart-item-id grey-text">ID: 0002390</p>
//                                     </div>
//                                 </MDBCol>
//                                 <MDBCol style={{'text-align':'right'}}>
//                                     <h2 className="cart-price"> <span>&#8369;</span> 75.00</h2>
//                                     <p className="qty-sub-txt grey-text">Quantity: 1</p>
//                                     <MDBBtn style={{'margin-top':'-2%'}} outline color="danger" size="sm">Remove</MDBBtn>
//                                 </MDBCol>
//                             </MDBRow>
//                             <div className="cart2-container">
//                             <MDBRow>
//                                 <MDBCol>
//                                     <div className="cart-item-container">
//                                         <img className="cart-img rounded" src={biogesic2}/>
//                                         <h4 className="cart-item-name">Biogesic</h4>
//                                         <p className="cart-item-id grey-text">ID: 01231251</p>
//                                     </div>
//                                 </MDBCol>
//                                 <MDBCol style={{'text-align':'right'}}>
//                                     <h2 className="cart-price"> <span>&#8369;</span> 23.00</h2>
//                                     <p className="qty-sub-txt grey-text">Quantity: 1</p>
//                                     <MDBBtn style={{'margin-top':'-2%'}} outline color="danger" size="sm">Remove</MDBBtn>
//                                 </MDBCol>
//                             </MDBRow>
//                             </div>
//                             <MDBRow>
//                                 <MDBCol>
//                                     <div className="cart-item-container">
//                                         <img className="cart-img rounded" src={biogesic}/>
//                                         <h4 className="cart-item-name">Paracetamol Acidreflux</h4>
//                                         <p className="cart-item-id grey-text">ID: 0001510</p>
//                                     </div>
//                                 </MDBCol>
//                                 <MDBCol style={{'text-align':'right'}}>
//                                     <h2 className="cart-price"> <span>&#8369;</span> 13.00</h2>
//                                     <p className="qty-sub-txt grey-text">Quantity: 1</p>
//                                     <MDBBtn style={{'margin-top':'-2%'}} outline color="danger" size="sm">Remove</MDBBtn>
//                                 </MDBCol>
//                             </MDBRow>
//                             <MDBRow>
//                                 <MDBCol>
                                    
//                                 </MDBCol>
//                                 <MDBCol style={{'text-align':'right'}}>
//                                     <h3 className="cart-total-txt">Order-Sub-Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>&#8369;</span> 168</h3>
//                                     <p className="cart-items-left grey-text">3 items</p>
//                                     <MDBBtn style={{'width':'400px'}} size="md" href="/payment-method" color="success"><h5 className="cart-checkout-txt" >Checkout</h5></MDBBtn>
//                                 </MDBCol>
//                             </MDBRow>
//                         </MDBContainer>
                        
//                         <div className="cart-suggestions-container">
//                             <MDBContainer>
//                                 <h4 className="cart-suggestions-h grey-text">
//                                     Suggested Medicines
//                                 </h4>
//                                 <MDBRow>
//                                     <MDBCol>
//                                     <a className="meds-card-link" href="/meds/item">
//                                                     {/* <MDBView hover zoom> */}
//                                                         <MDBCard>
//                                                             <MDBCardImage hover zoom className="img-fluid" src={biogesic} waves />
//                                                             <MDBCardBody>
//                                                             <MDBCardTitle><h3 className="med-item-header">Biogesic</h3></MDBCardTitle>
//                                                             <MDBCardText>
//                                                                 <div className="med-content-container">
//                                                                     <div className="grey-text text-center">
//                                                                     <p className="med-sub-h">
//                                                                         <MDBIcon icon="tags" />
//                                                                             Biogesic
//                                                                         </p>
//                                                                     </div>
//                                                                     <div className="prizeandlogo-container">
//                                                                         <div className="black-text text-center">
//                                                                             <h4 className="med-price"><img src={phlogo} className="icon-ph-flag" alt=""/> <span>&#8369;</span> 6.00</h4> 
//                                                                         </div>    
//                                                                     </div>
//                                                                 </div>
//                                                             </MDBCardText>
//                                                             </MDBCardBody>
//                                                         </MDBCard>
//                                                         {/* </MDBView> */}
//                                                         </a>
//                                     </MDBCol>
//                                     <MDBCol>
//                                     <a className="meds-card-link" href="/meds/item">
//                                                         <MDBCard>
//                                                             <MDBCardImage hover zoom className="img-fluid" src={biogesic2} waves />
//                                                             <MDBCardBody>
//                                                             <MDBCardTitle><h3 className="med-item-header">Enervon</h3></MDBCardTitle>
//                                                             <MDBCardText>
//                                                                 <div className="med-content-container">
//                                                                     <div className="grey-text text-center">
//                                                                     <p className="med-sub-h">
//                                                                         <MDBIcon icon="tags" />
//                                                                             Enervon
//                                                                         </p>
//                                                                     </div>
//                                                                     <div className="prizeandlogo-container">
//                                                                         <div className="black-text text-center">
//                                                                             <h4 className="med-price"><img src={phlogo} className="icon-ph-flag" alt=""/> <span>&#8369;</span> 5.00</h4> 
//                                                                         </div>    
//                                                                     </div>
//                                                                 </div>
//                                                             </MDBCardText>
//                                                             </MDBCardBody>
//                                                         </MDBCard>
//                                                         </a>
//                                     </MDBCol>
//                                     <MDBCol>
//                                     <a className="meds-card-link" href="/meds/item">
//                                                         <MDBCard>
//                                                             <MDBCardImage hover zoom className="img-fluid" src={biogesic4} waves />
//                                                             <MDBCardBody>
//                                                             <MDBCardTitle><h3 className="med-item-header">Alaxan</h3></MDBCardTitle>
//                                                             <MDBCardText>
//                                                                 <div className="med-content-container">
//                                                                     <div className="grey-text text-center">
//                                                                     <p className="med-sub-h">
//                                                                         <MDBIcon icon="tags" />
//                                                                             Alaxan Fr
//                                                                         </p>
//                                                                     </div>
//                                                                     <div className="prizeandlogo-container">
//                                                                         <div className="black-text text-center">
//                                                                             <h4 className="med-price"><img src={phlogo} className="icon-ph-flag" alt=""/> <span>&#8369;</span> 5.00</h4> 
//                                                                         </div>    
//                                                                     </div>
//                                                                 </div>
//                                                             </MDBCardText>
//                                                             </MDBCardBody>
//                                                         </MDBCard>
//                                                         </a>
//                                     </MDBCol>
//                                 </MDBRow>
//                             </MDBContainer> 
//                         </div>
//                     </div>
//                     <ScrollButton/>
//             </div>
//         )
//     }
// }
// export default Cart

import React, { Component } from 'react'
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBCard, MDBCardText, MDBCardBody, MDBCardTitle, MDBCardImage, MDBIcon, MDBAlert, MDBAnimation } from 'mdbreact' 
import Breadcrumb from './Breadcrumb'
import biogesic from '../img/meds-bio.jpeg'
import biogesic2 from '../img/meds-sample-pic-2.jpeg'
import biogesic3 from '../img/meds-sample-pic-3.jpeg'
import biogesic4 from '../img/meds-sample-pic-4.jpeg'
import phlogo from '../img/ph-flag.png'
import ScrollButton from './ScrollButton'

class Cart extends Component{
    constructor(props){
        super(props)
        this.state = {
            usersCart: [],
            usersLogin: null,
            cart: [],
            selectedCart: [],
            totalprice: null
          }
        this.med_key = props;
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
                const selectedMed = await fetch(`/cart`, settings);
                const data = await selectedMed.json();
                const cartprice = await fetch('/cart/cartTotalPrice', settings);
                const price = await cartprice.json();
                this.setState({cart: data}); 
                this.setState({totalprice: price});
            }catch(err) {
                console.log(err);
            }
        }

        removeCart = (item) =>{
         //   console.log(item.target.value);
           fetch(`/cart/removecart/${item.target.value}`, {
           method: 'POST',
           headers: {
               Accept: 'application/json',
               'Content-Type': 'application/json'
           }
            })
            .then(response => response.json())
            .then(data => {
                console.log('Request succeeded with JSON response', data);
            })
            .catch(error => {
                console.log('Request failed', error);
                window.location.reload();
            });
        }

    render(){
        const cart = this.state.cart;
        return(
            <div>
                <Breadcrumb bheader="Shopping Cart" bcurrent="Cart" />
                    <div className="cart-container"> 
                        <MDBAnimation type="slideInUp">  
                            <MDBContainer>
                                <MDBAlert color="success" dismiss>
                                <strong>This is your cart!</strong> The items that wished to buy are all here, last final step to obtain items is payment.
                                </MDBAlert>
                            </MDBContainer>
                        </MDBAnimation>
                        <MDBContainer>
                            
                           
                            <h1 className="cart-header">
                                Your Cart
                            </h1>
                            <p className="cart-sub-h grey-text">
                                You have {cart.length} items in your cart
                            </p>
                            {cart.map(item => 
                                <MDBRow>
                                <MDBCol>
                                    <div className="cart-item-container">
                                        <img className="cart-img rounded" src={biogesic}/>
                                        <h4 className="cart-item-name">{item.name}</h4>
                                        <p className="cart-item-id grey-text">Order ID: {item.order_id}</p>
                                    </div>
                                </MDBCol>
                                <MDBCol style={{'text-align':'right'}}>
                                    <h2 className="cart-price"> <span>&#8369;</span>{item.price}</h2>
                                    <p className="qty-sub-txt grey-text">Quantity: 1</p>
                                    <MDBBtn style={{'margin-top':'-2%'}} outline color="danger" size="sm" value={item.order_id} onClick={this.removeCart}>Remove</MDBBtn>
                                </MDBCol>
                              
                            </MDBRow>
                            )}
                            
                        
                            <MDBRow>
                                <MDBCol>
                                    
                                </MDBCol>
                                <MDBCol style={{'text-align':'right'}}>
                                    <h3 className="cart-total-txt">Order-Sub-Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>&#8369;</span> {this.state.totalprice}</h3>
                                    <p className="cart-items-left grey-text">{cart.length} items</p>
                                    <MDBBtn style={{'width':'400px'}} size="md" color="success"><h5 className="cart-checkout-txt">Checkout</h5></MDBBtn>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                        
                        <div className="cart-suggestions-container">
                            <MDBContainer>
                                <h4 className="cart-suggestions-h grey-text">
                                    Suggested Medicines
                                </h4>
                                <MDBRow>
                                    <MDBCol>
                                    <a className="meds-card-link" href="/meds/item">
                                                    {/* <MDBView hover zoom> */}
                                                        <MDBCard>
                                                            <MDBCardImage hover zoom className="img-fluid" src={biogesic} waves />
                                                            <MDBCardBody>
                                                            <MDBCardTitle><h3 className="med-item-header">Biogesic</h3></MDBCardTitle>
                                                            <MDBCardText>
                                                                <div className="med-content-container">
                                                                    <div className="grey-text text-center">
                                                                    <p className="med-sub-h">
                                                                        <MDBIcon icon="tags" />
                                                                            Biogesic
                                                                        </p>
                                                                    </div>
                                                                    <div className="prizeandlogo-container">
                                                                        <div className="black-text text-center">
                                                                            <h4 className="med-price"><img src={phlogo} className="icon-ph-flag" alt=""/> <span>&#8369;</span> 6.00</h4> 
                                                                        </div>    
                                                                    </div>
                                                                </div>
                                                            </MDBCardText>
                                                            </MDBCardBody>
                                                        </MDBCard>
                                                        {/* </MDBView> */}
                                                        </a>
                                    </MDBCol>
                                    <MDBCol>
                                    <a className="meds-card-link" href="/meds/item">
                                                        <MDBCard>
                                                            <MDBCardImage hover zoom className="img-fluid" src={biogesic2} waves />
                                                            <MDBCardBody>
                                                            <MDBCardTitle><h3 className="med-item-header">Enervon</h3></MDBCardTitle>
                                                            <MDBCardText>
                                                                <div className="med-content-container">
                                                                    <div className="grey-text text-center">
                                                                    <p className="med-sub-h">
                                                                        <MDBIcon icon="tags" />
                                                                            Enervon
                                                                        </p>
                                                                    </div>
                                                                    <div className="prizeandlogo-container">
                                                                        <div className="black-text text-center">
                                                                            <h4 className="med-price"><img src={phlogo} className="icon-ph-flag" alt=""/> <span>&#8369;</span> 5.00</h4> 
                                                                        </div>    
                                                                    </div>
                                                                </div>
                                                            </MDBCardText>
                                                            </MDBCardBody>
                                                        </MDBCard>
                                                        </a>
                                    </MDBCol>
                                    <MDBCol>
                                    <a className="meds-card-link" href="/meds/item">
                                                        <MDBCard>
                                                            <MDBCardImage hover zoom className="img-fluid" src={biogesic4} waves />
                                                            <MDBCardBody>
                                                            <MDBCardTitle><h3 className="med-item-header">Alaxan</h3></MDBCardTitle>
                                                            <MDBCardText>
                                                                <div className="med-content-container">
                                                                    <div className="grey-text text-center">
                                                                    <p className="med-sub-h">
                                                                        <MDBIcon icon="tags" />
                                                                            Alaxan Fr
                                                                        </p>
                                                                    </div>
                                                                    <div className="prizeandlogo-container">
                                                                        <div className="black-text text-center">
                                                                            <h4 className="med-price"><img src={phlogo} className="icon-ph-flag" alt=""/> <span>&#8369;</span> 5.00</h4> 
                                                                        </div>    
                                                                    </div>
                                                                </div>
                                                            </MDBCardText>
                                                            </MDBCardBody>
                                                        </MDBCard>
                                                        </a>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer> 
                        </div>
                    </div>
                    <ScrollButton/>
            </div>
        )
    }
}
export default Cart