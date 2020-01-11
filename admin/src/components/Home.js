import React, { Component } from 'react'
import { MDBJumbotron, MDBContainer, MDBRow,
        MDBCol
} from 'mdbreact'
import { Accordion, Card, Button } from 'react-bootstrap'
class Home extends Component{
    render(){
        return(
            <div>
            <h1 className="p-3">Welcome Admin!</h1>    
            <p className="grey-text">
                        You are entitled to these admin priviledges.  
                    </p>
                <MDBContainer>
                    <MDBJumbotron>
                        <MDBContainer>
                 
                    <h3 className="p-3">
                        The force is with you on this one!
                    </h3>
                    <MDBRow>
                        <MDBCol>
                            <div className="text-left">
                            <img
                            style={{'width':'50%'}}
                            src="https://i.pinimg.com/originals/1b/13/a3/1b13a33c63405b40277d61ff38e15fdb.jpg" alt=""/>
                            </div>
                        </MDBCol>
                        <MDBCol>
                        <p style={{'margin-left':'-40%'}}>
                            <br/>
                            {/* <br/>You can add products
                            <br/>You can approve orders
                            <br/>You can track orders
                            <br/>You can update the stocks
                            You can see whatever the hell's going <br/> on with the client side of the application */}
                            <Accordion style={{'width':'100%'}}>
                                <Card>
                                    <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        <span style={{'font-size':'11px'}}>Add Products</span>
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                    <Card.Body>Add as many products you please, also market your new product</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    <span style={{'font-size':'11px'}}>Supervise Orders</span>
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="1">
                                    <Card.Body>See whatever the user has ordered</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                    <span style={{'font-size':'11px'}}>Oversee Products on Route</span>
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="2">
                                    <Card.Body>Overwatch orders being delivered to customers</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                    <span style={{'font-size':'11px'}}>Update Stocks</span>
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="3">
                                    <Card.Body>You can update the stocks
                            You can see whatever the hell's going on with the client side of the application</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </p>
                    </MDBCol>
                    </MDBRow>
                        </MDBContainer>
                    </MDBJumbotron>
                </MDBContainer>
            </div>
        )
    }
}
export default Home