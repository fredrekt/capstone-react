import React, { Component } from 'react'
import { MDBContainer, MDBTableHead, MDBTable, MDBTableBody, MDBBtn } from 'mdbreact'


class OrderedProducts extends Component{
    render(){
        return(
            <div style={{'margin-left':'15%'}}>
                <MDBContainer>
                <h1 className="admin-prod-h text-left">
                     Ordered Inventory
                </h1>
                    <MDBTable hover>
                            <MDBTableHead>
                                <tr>
                                <th>ORDER #</th>
                                <th>USER #</th>
                                <th>MED #</th>
                                <th>QTY</th>
                                <th>STATUS</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                <tr>
                                <td>1</td>
                                <td>Romer</td>
                                <td>bio-2354</td>
                                <td>20</td>
                                <td>
                                    <MDBBtn
                                    color="success"
                                    size="sm"
                                    >
                                        Approve
                                    </MDBBtn>
                                </td>
                                </tr>
                                <tr>
                                <td>2</td>
                                <td>Fred</td>
                                <td>neos-0921</td>
                                <td>15</td>
                                <td> 
                                    <MDBBtn
                                    color="success"
                                    size="sm"
                                    >
                                        Approve
                                    </MDBBtn>
                                </td>
                                </tr>
                                <tr>
                                <td>3</td>
                                <td>Clydde</td>
                                <td>alax-0982</td>
                                <td>100</td>
                                <td>
                                    <MDBBtn
                                    color="success"
                                    size="sm"
                                    >
                                        Approve
                                    </MDBBtn>
                                </td>
                                </tr>
                            </MDBTableBody>
                            </MDBTable>
                </MDBContainer>
            </div>
        )
    }
}
export default OrderedProducts