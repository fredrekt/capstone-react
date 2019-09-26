import React from "react";
import {  MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

const Features = () => {
  return (
    <MDBContainer> 
        <section className="my-5">
            <h2 className="f-header">
            Medishop's Features
            </h2>

            <MDBRow>
            <MDBCol lg="5" className="text-center text-lg-left">
                <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/screens-section.jpg"
                alt=""
                />
            </MDBCol>
            <MDBCol lg="7">
                <MDBRow className="mb-3">
                <MDBCol size="1">
                    <MDBIcon icon="share" size="lg" className="indigo-text" />
                </MDBCol>
                <MDBCol xl="10" md="11" size="10">
                    <h5 className="font-weight-bold mb-3">Mobile Friendly User Interface</h5>
                    <p className="grey-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    enim ad minima veniam, quis nostrum exercitationem ullam.
                    Reprehenderit maiores aperiam assumenda deleniti hic.
                    </p>
                </MDBCol>
                </MDBRow>
                <MDBRow className="mb-3">
                <MDBCol size="1">
                    <MDBIcon icon="share" size="lg" className="indigo-text" />
                </MDBCol>
                <MDBCol xl="10" md="11" size="10">
                    <h5 className="font-weight-bold mb-3">E-Learning Mobile Application</h5>
                    <p className="grey-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    enim ad minima veniam, quis nostrum exercitationem ullam.
                    Reprehenderit maiores aperiam assumenda deleniti hic.
                    </p>
                </MDBCol>
                </MDBRow>
                <MDBRow className="mb-3">
                <MDBCol size="1">
                    <MDBIcon icon="share" size="lg" className="indigo-text" />
                </MDBCol>
                <MDBCol xl="10" md="11" size="10">
                    <h5 className="font-weight-bold mb-3">Abudant with Information</h5>
                    <p className="grey-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    enim ad minima veniam, quis nostrum exercitationem ullam.
                    Reprehenderit maiores aperiam assumenda deleniti hic.
                    </p>
                </MDBCol>
                </MDBRow>
            </MDBCol>
            </MDBRow>
        </section>
    </MDBContainer>  
  )
}

export default Features;