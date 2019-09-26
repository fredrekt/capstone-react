import React, { Component } from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCollapse } from "mdbreact";

class Jumbotron extends Component {
    state = {
        collapseID: "",
        learn:"Read More"
      }
      
      toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
          collapseID: prevState.collapseID !== collapseID ? collapseID : "",
          learn: "Read Less"
        }));
      }
    render(){
        return (
            <MDBContainer className="mt-5 text-center">
            <MDBRow>
                <MDBCol>
                <MDBJumbotron>
                    <h2 className="j-header">What is Medishop?</h2>
                    <hr className="my-2" />
                    <p className="j-content">
                    Medishop is an E-Commerce Web and Mobile Application developed by Fred Garingo, John Romer and Clydde Necosia.
                    <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
          <p className="j-content">
          It is an application that will help you with your medicines. Keep track of what you are taking and not physically going to the pharmacies or hospitals. The purpose of Medishop is to help everyone in the world to simplify their lives that are in need of medicines. Especially the old ones because it is a great pain to them to physically go to pharmacies and etc. And lastly Medishop educates people about Pharmaceutical Drugs or Medicines.
          </p>
        </MDBCollapse>
                    </p>
                    <p className="lead">
                    <MDBBtn
                        onClick={this.toggleCollapse("basicCollapse")}
                        color="info">{this.state.learn}</MDBBtn>
                        
                    </p>
                </MDBJumbotron>
                </MDBCol>
            </MDBRow>
            </MDBContainer>
        )
    }
}

export default Jumbotron;