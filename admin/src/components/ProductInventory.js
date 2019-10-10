import React, { Component } from 'react'
import { MDBContainer, MDBTableHead, MDBTable, MDBTableBody, MDBBtn } from 'mdbreact'

class ProductInventory extends Component{
    constructor(props){
        super(props)
        this.state = {
            products: []
        }
    }
    componentDidMount(){
        fetch('/allprod')
        .then(res => res.json())
        .then(data => this.setState({products:data}))
    }
    render(){
        return( 
           <div style={{'margin-left':'15%'}}>
                <MDBContainer>
                <h1 className="admin-prod-h text-left">
                     Your Inventory
                </h1>
                    <MDBTable hover>
                            <MDBTableHead>
                                <tr>
                                <th>MED #</th>
                                <th>Product Name</th>
                                <th>Generic Name</th>
                                <th>Brand</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Stock</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                {this.state.products.map(products =>
                                <tr key={products.med_id}>
                                <td>{products.med_id}</td>
                                <td>{products.name}</td>
                                <td>	
                                {products.generic_name}
                                </td>
                                <td>{products.brand}</td>
                                <td>{products.category}</td>
                                <td>{products.price}</td>
                                <td>{products.stock}</td>
                                </tr>
                                )}
                            </MDBTableBody>
                            </MDBTable>
                </MDBContainer>
            </div>
        )
    }
}
export default ProductInventory