import React, { Component } from 'react'
import Breadcrumb from './Breadcrumb'
import { MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBPopover, MDBPopoverBody, MDBPopoverHeader, MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCollapse, MDBInput } from 'mdbreact'
import item1 from '../img/meds-bio.jpeg'
import { Popover, OverlayTrigger } from 'react-bootstrap'
import phlogo from '../img/ph-flag.png'

//semantic ui - rating
import { Rating } from 'semantic-ui-react'
import { stringify } from 'querystring'


class MedicineItem extends Component{
    constructor(props){
        super(props)
        this.state = {
            collapseID: "",
            modal: false,
            selectedMed:[],
            rating:0
         
        }
        this.med_key = props
    }
      toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
          collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));
      }
    

      handleChange = (e) => {
          this.setState({ rating: e.target.value })
      }
      
      handleRating = (event) =>{
        console.log('You have rated: ' +this.state.rating)
        event.preventDefault();
        const vrating = this.state.rating

        fetch(`/add-rating/${this.state.selectedMed.med_id}`,{
            method: 'POST',
            credentials: 'include',

            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
           body: stringify({vrating})
           
        })
        .then(res => res.json())
        .then(data => {
            this.setState({rating:data})
        })  
        
      }

      toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
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
        const popover = (
            <Popover id="popover-basic">
              <Popover.Title as="h3">Product Price</Popover.Title>
              <Popover.Content>
              <h4 className="med-price"><img src={phlogo} className="icon-ph-flag" alt=""/> <span>&#8369;</span> 5.00</h4>
              </Popover.Content>
            </Popover>
          );
          const { rating } = this.state
          const selectedItem =  this.state.selectedMed;
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
                            <h2 className="med-item-name">{selectedItem.name}</h2>
                        </OverlayTrigger>
                            <h5 className="grey-text">{selectedItem.generic_name}</h5>
                            <img className="img-price" src={phlogo} />
                            <h3 className="med-prod-info">Product Info</h3>
                            <p className="med-info">
                                {selectedItem.info}
                            </p>
                            <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
                            <h3 className="med-prod-info-2">Dosage</h3>
                            <p>
                            {selectedItem.dosage}
                            </p>
                            <h3 className="med-prod-info-2">Shape</h3>
                            <p>
                            {selectedItem.shape}
                            </p>
                            <h3 className="med-prod-info-2">Brand</h3>
                            <p>{selectedItem.brand}</p>
                            </MDBCollapse>
                            <MDBBtn size="sm" onClick={this.toggleCollapse("basicCollapse")} outline color="primary">Read More</MDBBtn>
                            <br/>
                            
                            <MDBBtn size="" onClick={this.toggle} className="btn-cart" color="primary">Add to cart</MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
            {/*
            ========== MODALS/ ALERT DIALOG =====
             */}

            <MDBContainer>
            <form onSubmit={this.handleRating}>
            <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                <MDBModalHeader toggle={this.toggle}></MDBModalHeader>
                <MDBModalBody>
                    <div className="text-center">
                        <div>Rating: {rating}</div>
                        <input
                        type='range'
                        min={0}
                        max={5}
                        value={rating}
                        onChange={this.handleChange}
                        />
                        <br />
                        <Rating rating={rating} maxRating={5} />
                    </div>
                    
                </MDBModalBody>
                <MDBModalFooter>
                <MDBBtn color="success" type="submit">Submit</MDBBtn>
                <MDBBtn color="danger" onClick={this.toggle}>Close</MDBBtn>
                
                </MDBModalFooter>
            </MDBModal>
            </form>
            </MDBContainer>
            </div>
        )
    }
}
export default MedicineItem