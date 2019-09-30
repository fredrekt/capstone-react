import React, { Component } from 'react'
import Breadcrumb from './Breadcrumb'
import { MDBPopover, MDBPopoverBody, MDBPopoverHeader, MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCollapse, MDBInput } from 'mdbreact'
import item1 from '../img/meds-bio.jpeg'
import { Popover, OverlayTrigger } from 'react-bootstrap'
import phlogo from '../img/ph-flag.png'

class MedicineItem extends Component{
    constructor(props){
    super(props)
    this.state = {
        collapseID: "",
        selectedMed: []
      }
    this.med_key = props;
    }

      toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
          collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));
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
            const selectedMed = await fetch(`/medicines/selectedMed/${this.props.match.params.item}`, settings);
            const data = await selectedMed.json();
            this.setState({selectedMed: data[0]}); 
        }catch(err) {
            console.log(err);
        }
 
    }
      
    render(){
        const selectedItem =  this.state.selectedMed;
    
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
                            <h2 className="med-item-name">{selectedItem.medicine_name}</h2>
                        </OverlayTrigger>
                            <h5 className="grey-text">{selectedItem.generic_name}</h5>
                            <h3 className="med-prod-info">Product Info</h3>
                            <p className="med-info">{selectedItem.info}</p>
                        <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
                            <h3 className="med-prod-info-2">Dosage</h3>
                            <p>{selectedItem.dosage}</p>
                            <h3 className="med-prod-info-2">Shape</h3>
                            <p>{selectedItem.shape}</p>
                            <h3 className="med-prod-info-2">Brand</h3>
                            <p>{selectedItem.brand_name}</p>
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