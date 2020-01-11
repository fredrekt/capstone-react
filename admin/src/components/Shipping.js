import React, { Component } from 'react'
import { MDBContainer, MDBTable, MDBTableHead, MDBTableBody,
     MDBCol, MDBRow, MDBInput, MDBBtn,
     MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact'
class Shipping extends Component{
    constructor(props){
        super(props)
        this.state ={
            modal: false,
            meds:[],
            name:'',
            generic: '',
            brand: '',
            shape: '',
            dosage: '',
            info: '',
            price: '',
            image: '',
            category: '',
            stock: 0,
            medid: 1
        }
    }

    handleChange = (event) =>{
        this.setState({stock: event.target.value})
    }
    handleChange2 = (event) =>{
        this.setState({medid :event.target.value})
    }
    handleChange3 = (event) =>{
        this.setState({name :event.target.value})
    }
    addtest = () =>{
        console.log('name:'+this.state.name+'generic:'+this.state.generic)
    }

    handleSelect = (event) =>{
        this.setState({ medid: event.target.value})
    }

    toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
      }
    updateStock = (event) =>{
        event.preventDefault()
        const stock = this.state.stock
        const medid = this.state.medid
        const name =this.state.name

        fetch('/update-stock',{
            method: 'POST',
            credentials: 'include',
             headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `stock=${stock}&name=${medid}`
        })
        .then(res => res.json())
        .then(data =>{
            console.log('Updated stocks successfully!', data)
            window.location.reload()
        })
        .catch(error =>{
            console.log('Failed on catch', error)
        })
    }

    // handleSubmit = (event) => {
    //     alert('Your favorite flavor is: ' + this.state.medid);
    //     event.preventDefault();
    //   }
    componentDidMount(){
        fetch('/allprod')
        .then(res => res.json())
        .then(data => this.setState({meds: data}))
    }

    render(){
        // {props =>{
        //     const { values, handleChange} = props
        // }}
        const meds = this.state.meds
        return(
                <div style={{'margin-left': '15%'}}>
                    <form onSubmit={this.updateStock}>
                    <MDBContainer>
                        <h1 className="admin-prod-h text-left">
                            Shipping Management
                        </h1>
                        <p style={{'margin-top':'-4%','margin-botton':'5%vb fg vc'}} className="grey-text text-left">
                           Everything about shipping your products are below
                        </p>
                              <MDBContainer> 
                                {/* <MDBRow>
                                    <MDBCol>
                                        <div style={{'margin-left':'-22%'}} className="left-text">
                                        
                                            <select value={this.state.medid} onChange={this.handleSelect} style={{'width':'70%'}} className="browser-default custom-select">
                                                {this.state.meds.map(meds =>
                                                <option value={meds.med_id}>{meds.name}</option>
                                                )}
                                            
                                            </select>
                                        </div>
                                    </MDBCol>

                                    <MDBCol>
                                        <MDBInput
                                            label="Quantity"
                                            group
                                            type="text"
                                            validate
                                            onChange={this.handleChange}
                                            value={this.state.stock}
                                            error="wrong"
                                            success="right"
                                            style={{'width':'50%', 'border':'solid 1px white', 'margin-top':'-10%'}}
                                        />
                                    </MDBCol>

                                    <MDBCol>
                                        <MDBBtn
                                            outline 
                                            color="primary"
                                            size="md"
                                            style={{'width':'70%','margin-top':'-2%','margin-left':'-50%'}}
                                            type="submit"
                                            >
                                                Update Stock
                                        </MDBBtn>
                                    </MDBCol>
                                </MDBRow> */}
                                
                                <MDBTable hover>
                            <MDBTableHead>
                                <tr>
                                <th>USER ID</th>
                                <th>TRANSACTION ID</th>
                                <th>ITEMS</th>
                                <th>DELIVERY SERVICE</th>
                                <th>MOP</th>
                                <th>STATUS</th>
                                <th>OVERRIDE</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                               <tr>
                                   <td>king king</td>
                                   <td>transaction-091</td>
                                   <td>kingking cart</td>
                                   <td>LBC</td>
                                   <td>Visa Mastercard</td>
                                   <td>Travelling</td>
                                   <td>
                                       <MDBBtn
                                       color="danger"
                                       size="sm"
                                       >
                                            OVERRIDE
                                       </MDBBtn>
                                   </td>
                               </tr>
                            </MDBTableBody>
                            </MDBTable>
                                {/* <MDBRow>
                                    <MDBCol>
                                        <MDBInput
                                            label="Brand Name"
                                            group
                                            type="text"
                                            validate
                                            disabled
                                            onchange={this.handleChange3}
                                            value={this.state.brand}
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
                                            disabled
                                            onchange={this.handleChange4}
                                            value={this.state.shape}
                                            error="wrong"
                                            success="right"
                                            style={{'width':'50%', 'border':'solid 1px white'}}
                                        />
                                    </MDBCol>
                                </MDBRow>   */}
                                {/* <MDBRow>
                                    <MDBCol>
                                            <div style={{'margin-left':'-55%'}} className="left-text">
                                                <select disabled style={{'width':'30%'}} className="browser-default custom-select">
                                                    <option>Choose Category</option>
                                                    <option value="1">Pain Reliever</option>
                                                </select>
                                            </div>
                                        </MDBCol>
                                        <MDBCol>
                                            <MDBInput
                                                label="Quantity"
                                                group
                                                type="text"
                                                validate
                                                onChange={this.handleChange}
                                                value={this.state.stock}
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
                                            disabled
                                            onChange={this.handleChange7}
                                            value={this.state.dosage}
                                            style={{'width':'80%', 'border':'solid 1px white'}}
                                            />
                                    </MDBCol>
                                    <MDBCol>
                                        <MDBInput
                                            type="textarea"
                                            label="Short Description" 
                                            rows="5"
                                            disabled
                                            onChange={this.handleChange8}
                                            style={{'width':'80%', 'border':'solid 1px white'}}
                                        />
                                    </MDBCol>
                                </MDBRow> */}
                    </MDBContainer>
                    {/* <div className="text-center">
                        <MDBBtn
                         outline 
                         color="primary"
                         size="md"
                         style={{'width':'30%'}}
                         type="submit"
                         >
                            Update Stock
                        </MDBBtn>
                    </div> */}
                    </MDBContainer>
                    </form>
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

export default Shipping