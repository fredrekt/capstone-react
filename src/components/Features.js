import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import fred from '../img/dev1.jpg'
import { Popover, OverlayTrigger } from 'react-bootstrap'
const Features = () => {
    const popover = (
        <Popover id="popover-basic">
          <Popover.Title as="h3"></Popover.Title>
          <Popover.Content>
          <img className="f-dev-container" src={fred} alt=""/>
          <h4 className="med-price text-center">Fredrick Garingo</h4>
          <h5 className="f-dev-sub-hdr text-center grey-text">Full Stack Developer</h5>
          </Popover.Content>
        </Popover>
      );
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
                    Our
                    <OverlayTrigger trigger="hover" placement="top" overlay={popover}>
                    <span> UI/UX Designer and Front-End Developer </span> 
                    </OverlayTrigger>
                    has specifically designed and developed this Software to be easy to use. This software is Mobile Responsive, designed to look good on your mobile phones.
                    </p>
                </MDBCol>
                </MDBRow>
                <MDBRow className="mb-3">
                <MDBCol size="1">
                    <MDBIcon icon="share" size="lg" className="indigo-text" />
                </MDBCol>
                <MDBCol xl="10" md="11" size="10">
                    <h5 className="font-weight-bold mb-3">E-Learning Web Application</h5>
                    <p className="grey-text">
                    You can learn a lot about medicines and about your health. You can also learn what specific medicine you need and what you have been taking.
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
                    All of our information about medicines are verified and researched carefully. Our Appliction provides great information that you need to know about medicines. All are vetted thoroughly before they are stored in our databases.
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