import React, { Component } from 'react'
import { MDBContainer, MDBTable, MDBTableHead, MDBTableBody,
     MDBCol, MDBRow, MDBInput, MDBBtn, MDBIcon,
     MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact'
import { stringify } from 'querystring'

//react-toastify
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

class AddProducts extends Component{
    constructor(props){
        super(props)
        this.state ={
            modal: false,
            name:'',
            generic: '',
            brand: '',
            shape: '',
            dosage: '',
            info: '',
            price: '',
            image: '',
            category: '',
            stock: 0
        }
    }
    handleChange = (event) =>{
        this.setState({name: event.target.value})
    }
    handleChange2 = (event) =>{
        this.setState({generic: event.target.value})
    }
    handleChange3 = (event) =>{
        this.setState({brand: event.target.value})
    }
    handleChange4 = (event) =>{
        this.setState({shape: event.target.value})
    }
    handleChange5 = (event) =>{
        this.setState({dosage: event.target.value})
    }
    handleChange6 = (event) =>{
        this.setState({info: event.target.value})
    }
    handleChange7 = (event) =>{
        this.setState({price: event.target.value})
    }
    handleChange8 = (event) =>{
        this.setState({image: event.target.value})
    }
    handleChange9 = (event) =>{
        this.setState({category: event.target.value})
    }
    handleChange10 = (event) =>{
        this.setState({stock: event.target.value})
    }


    addtest = () =>{
        console.log('the states',this.state)
    }

    toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
      }
    notifySuccess = () => {
        toast.success(
        <div>
        <MDBIcon size='lg' icon="check-circle" />
        <span className="success-h"> New product has been added!</span></div>, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose:1200
            });
    }

    notifyError = () =>{
        toast.error(<div>
            <MDBIcon size='lg' icon="shield-alt" />
            <span className="error-h"> Sorry, database is unavailable!</span></div>, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1300

          });
    }

    addProd = (event) =>{
        console.log("data is: "+this.state.image)
        event.preventDefault();
        
        const name = this.state.name
        const generic = this.state.generic
        const brand = this.state.brand
        const shape = this.state.shape
        const dosage = this.state.dosage
        const info = this.state.info
        const price = this.state.price
        const image = this.state.image
        const category = this.state.category
        const stock = this.state.stock

        console.log(this.state.name)
        fetch('/addproduct',{
            method: 'POST',
            credentials: 'include',
             headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `name=${name}&generic=${generic}&brand=${brand}&shape=${shape}&dosage=${dosage}&info=${info}&price=${price}&image=${image}&category=${category}&stock=${stock}`
        })
        .then(res => res.json())
        .then(data => {
            console.log('Added Products Successfully!', data)
            this.notifySuccess()
            setTimeout(()=>{
                window.location.reload()
        },1500)
        })
        .catch(error =>{
            console.log('Failed on catch',error)
            this.notifyError()
        })
    }
    render(){
        // {props =>{
        //     const { values, handleChange} = props
        // }}
        return(
                <div style={{'margin-left': '15%'}}>
                    <ToastContainer/>
                <form onSubmit={this.addProd}>
                    <MDBContainer>
                        <h1 className="admin-prod-h text-left">
                            You, add it yourself!
                        </h1>
                              <MDBContainer>  
                                  <MDBRow>
                                      <MDBCol>
                                        <MDBInput
                                            label="Product Name"
                                            group
                                            type="text"
                                            validate
                                            onChange={this.handleChange}
                                            value={this.state.name}
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
                                            onChange={this.handleChange2}
                                            value={this.state.generic}
                                            error="wrong"
                                            success="right"
                                            style={{'width':'50%', 'border':'solid 1px white'}}
                                        />
                                    </MDBCol>
                                    <MDBCol>
                                        <MDBInput
                                            label="Pricing"
                                            group
                                            type="number"
                                            validate
                                            onChange={this.handleChange7}
                                            value={this.state.price}
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
                                            onChange={this.handleChange3}
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
                                            onChange={this.handleChange4}
                                            value={this.state.shape}
                                            error="wrong"
                                            success="right"
                                            style={{'width':'50%', 'border':'solid 1px white'}}
                                        />
                                    </MDBCol>
                                    <MDBCol>    
                                        <MDBInput
                                            label="Image"
                                            group
                                            type="text"
                                            validate
                                            onChange={this.handleChange8}
                                            value={this.state.image}
                                            error="wrong"
                                            success="right"
                                            style={{'width':'50%', 'border':'solid 1px white'}}
                                        />
                                    </MDBCol>
                                </MDBRow>  
                                <MDBRow>
                                    <MDBCol>
                                            {/* <div style={{'margin-left':'-55%'}} className="left-text">
                                                <select style={{'width':'30%'}} className="browser-default custom-select">
                                                    <option>Choose Category</option>
                                                    <option value="1">Pain Reliever</option>
                                                    <option value="2">Fever</option>
                                                    <option value="3">Allergy</option>
                                                </select>
                                            </div> */}
                                            <MDBInput
                                            label="Category"
                                            group
                                            type="text"
                                            validate
                                            onChange={this.handleChange9}
                                            value={this.state.category}
                                            error="wrong"
                                            success="right"
                                            style={{'width':'50%', 'border':'solid 1px white'}}
                                        />
                                        </MDBCol>
                                        <MDBCol>
                                            <MDBInput
                                                label="Quantity"
                                                group
                                                type="number"
                                                validate
                                                onChange={this.handleChange10}
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
                                            onChange={this.handleChange5}
                                            value={this.state.dosage}
                                            style={{'width':'80%', 'border':'solid 1px white'}}
                                            />
                                    </MDBCol>
                                    <MDBCol>
                                        <MDBInput
                                            type="textarea"
                                            label="Short Description" 
                                            rows="5" 
                                            value={this.state.info}
                                            onChange={this.handleChange6}
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
                         type="submit"
                         >
                            Add Product
                        </MDBBtn>
                    </div>
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

export default AddProducts