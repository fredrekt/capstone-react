import React, { Component } from 'react'
import Breadcrumb from './Breadcrumb'
import { MDBPopover, MDBPopoverBody, MDBPopoverHeader, MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCollapse, MDBInput } from 'mdbreact'
import item1 from '../img/meds-bio.jpeg'
import { Popover, OverlayTrigger } from 'react-bootstrap'
import phlogo from '../img/ph-flag.png'

class MedicineItem extends Component{
    state = {
        collapseID: ""
      }
      toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
          collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));
      }
      
    render(){
        const popover = (
            <Popover id="popover-basic">
              <Popover.Title as="h3">Product Price</Popover.Title>
              <Popover.Content>
              <h4 className="med-price"><img src={phlogo} className="icon-ph-flag" alt=""/> <span>&#8369;</span> 5.00</h4>
              </Popover.Content>
            </Popover>
          );
        return(
            <div>
                <Breadcrumb bheader="Over the Counter Collection" bcurrent="Biogesic" />
            <div className="section-medicine-item">  
                <MDBContainer>
                    <MDBRow>
                        <MDBCol>
                            <img src={item1} alt=""/>
                            <img className="med-option-container" src={item1}/>
                            <img className="med-option-container-2" src={item1}/>
                        </MDBCol>
                        <MDBCol>
                        <OverlayTrigger trigger="hover" placement="top" overlay={popover}>
                            <h2 className="med-item-name">Biogesic</h2>
                        </OverlayTrigger>
                            <h5 className="grey-text">Ibufrofen Paracetamol</h5>
                            <h3 className="med-prod-info">Product Info</h3>
                            <p className="med-info">
                                Gives relief
                                from colds and its symptoms; including 
                                runny or stuffy nose, 
                                post nasal drip, allergic rhinitis, fever, flu, 
                                headache and body aches.
                            </p>
                            <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
                            <h3 className="med-prod-info-2">Dosage</h3>
                            <p>
                            TAB. Adult & Children- >12yrs:
                            1 tab, SYRUP. Children- >12yrs: 15ml,
                            12yrs ranging from 2.5-7.5ml
                            depending on ages,
                            DROPS- 1-2yrs: 1.5-2ml,
                            7-11mos: 1.25-1.5ml, 
                            4-6mos: 1-1.25ml, birth-3mos: 0.75-1ml.
                            TO BE TAKE 4 TIMES DAILY
                            </p>
                            <h3 className="med-prod-info-2">Shape</h3>
                            <p>( 0.662" x 0.300" 
                            elliptical-shaped ), oblong
                            </p>
                            <h3 className="med-prod-info-2">Brand</h3>
                            <p>Neozep Forte</p>
                            </MDBCollapse>
                            <MDBBtn size="sm" onClick={this.toggleCollapse("basicCollapse")} outline color="primary">Read More</MDBBtn>
                            <br/>
                            <MDBBtn size="" className="btn-cart" color="primary">Add to cart</MDBBtn>
                        </MDBCol>
                    </MDBRow>
                    {/* <MDBRow>
                        <MDBCol className="margin-cart">
                        
                        </MDBCol>
                    </MDBRow> */}
                </MDBContainer>
            </div>
            </div>
        )
    }
}
export default MedicineItem