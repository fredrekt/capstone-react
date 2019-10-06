import React, { Component } from 'react'
import { MDBContainer, MDBTableHead, MDBTable, MDBTableBody, MDBBtn } from 'mdbreact'

class ProductInventory extends Component{
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
                                <tr>
                                <td>1</td>
                                <td>Biogesic</td>
                                <td>	
                                Ibuprofen with
                                Paracetamol</td>
                                <td>Alnix Plus</td>
                                <td>Allergy</td>
                                <td>23.00</td>
                                <td>100</td>
                                </tr>
                                <tr>
                                <td>2</td>
                                <td>Neosep</td>
                                <td>Cetirizine diHCI</td>
                                <td>Unilab</td>
                                <td>Colds</td>
                                <td>15</td>
                                <td>25</td>
                                </tr>
                                <tr>
                                <td>3</td>
                                <td>Allerta</td>
                                <td>Cetirizine</td>
                                <td>Unilab</td>
                                <td>Allergy</td>
                                <td>15.00</td>
                                <td>50</td>
                                </tr>
                            </MDBTableBody>
                            </MDBTable>
                </MDBContainer>
            </div>
        )
    }
}
export default ProductInventory