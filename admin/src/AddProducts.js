import React, { Component } from 'react'
import { MDBContainer, MDBTable, MDBTableHead, MDBTableBody,
     MDBCol, MDBRow, MDBInput, MDBBtn,
     MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact'
class AddProducts extends Component{
    constructor(props){
        super(props)
        this.state ={
            modal: false
        }
    }

    toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
      }
    render(){
        return(
                <div style={{'margin-left': '15%'}}>
                    <MDBContainer>
                        <h1 className="admin-prod-h text-left">
                            You, add it your it yourself!
                        </h1>
                              <MDBContainer>  
                                  <MDBRow>
                                      <MDBCol>
                                        <MDBInput
                                            label="Product Name"
                                            group
                                            type="text"
                                            validate
                                            error="wrong"
                                            success="right"
                                            style={{'width':'50%', 'border':'solid 1px white'}}
                                        />
                                    </MDBCol>
                                    <MDBCol>
                                        <MDBInput
                                            label="Generic Name"
                                            group
                                            type="text"
                                            validate
                                            error="wrong"
                                            success="right"
                                            style={{'width':'50%', 'border':'solid 1px white'}}
                                        />
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol>
                                        <MDBInput
                                            label="Brand Name"
                                            group
                                            type="text"
                                            validate
                                            error="wrong"
                                            success="right"
                                            style={{'width':'50%', 'border':'solid 1px white'}}
                                        />
                                    </MDBCol>
                                    <MDBCol>    
                                        <MDBInput
                                            label="Shape"
                                            group
                                            type="text"
                                            validate
                                            error="wrong"
                                            success="right"
                                            style={{'width':'50%', 'border':'solid 1px white'}}
                                        />
                                    </MDBCol>
                                </MDBRow>  
                                <MDBRow>
                                    <MDBCol>
                                            <div style={{'margin-left':'-55%'}} className="left-text">
                                                <select style={{'width':'30%'}} className="browser-default custom-select">
                                                    <option>Choose Category</option>
                                                    <option value="1">Pain Reliever</option>
                                                    <option value="2">Fever</option>
                                                    <option value="3">Allergy</option>
                                                </select>
                                            </div>
                                        </MDBCol>
                                        <MDBCol>
                                            <MDBInput
                                                label="Quantity"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                style={{'width':'50%', 'border':'solid 1px white'}}
                                            />
                                        </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol>
                                        <MDBInput
                                            type="textarea"
                                            label="Dosage" 
                                            rows="5" 
                                            style={{'width':'80%', 'border':'solid 1px white'}}
                                            />
                                    </MDBCol>
                                    <MDBCol>
                                        <MDBInput
                                            type="textarea"
                                            label="Short Description" 
                                            rows="5" 
                                            style={{'width':'80%', 'border':'solid 1px white'}}
                                        />
                                    </MDBCol>
                                </MDBRow>
                    </MDBContainer>
                    <div className="text-center">
                        <MDBBtn
                         outline 
                         size="md"
                         style={{'width':'30%'}}
                         onClick={this.toggle}
                         >
                            Add Product
                        </MDBBtn>
                    </div>
                    </MDBContainer>
                    <div>
                        <MDBContainer>
                            <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                                <MDBModalHeader toggle={this.toggle}>One last step</MDBModalHeader>
                                <MDBModalBody>
                                    <div className="input-group">
                                        <div className="custom-file">
                                            <input
                                            type="file"
                                            className="custom-file-input"
                                            id="inputGroupFile01"
                                            aria-describedby="inputGroupFileAddon01"
                                            />
                                            <label className="custom-file-label" htmlFor="inputGroupFile01">
                                            Choose file
                                            </label>
                                            
                                        </div>
                                    </div>
                                </MDBModalBody>
                                <p className="grey-text">
                                                Please select image for your product
                                            </p>
                                <MDBModalFooter>
                                <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
                                <MDBBtn color="primary">Save changes</MDBBtn>
                                </MDBModalFooter>
                            </MDBModal>
                            </MDBContainer>
                        </div>
                </div>
             
        )
    }
}

export default AddProducts