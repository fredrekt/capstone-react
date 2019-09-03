import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBIcon, MDBTooltip,  MDBBadge, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBBtn } from "mdbreact";
import fi1 from '../img/fi-med-1.jpeg'
import fi2 from '../img/fi-med-2.jpeg'
import fi3 from '../img/fi-med-3.jpeg'
import fi4 from '../img/fi-med-4.jpeg'


class FeaturedItems extends Component{
  render(){
    return (
      <MDBContainer>
        <section className="text-center my-5">
          <h2 className="fi-header">
            Bestselling Medicines
          </h2>
          <p className="grey-text text-center w-responsive mx-auto mb-5">
            Our Featured Medicines are here for you to choose and add to cart. <br/>We have a variety of Medicines in our Applictaion.
          </p>
          <MDBRow>
            <MDBCol>
            <MDBCard>
              <MDBCardImage className="img-fluid" src={fi1} waves />
              <MDBCardBody>
                <MDBCardTitle>Biogesic</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make
                  up the bulk of the card&apos;s content.
                </MDBCardText>
                <MDBBtn outline color="primary" href="#">add to cart</MDBBtn>
              </MDBCardBody>
            </MDBCard>
            </MDBCol>
            <MDBCol>
            <MDBCard>
              <MDBCardImage className="img-fluid" src={fi2} waves />
              <MDBCardBody>
                <MDBCardTitle>Bioflu</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make
                  up the bulk of the card&apos;s content.
                </MDBCardText>
                <MDBBtn color="primary" outline href="#">Add to cart</MDBBtn>
              </MDBCardBody>
            </MDBCard>
            </MDBCol>
            <MDBCol>
            <MDBCard>
              <MDBCardImage className="img-fluid" src={fi3} waves />
              <MDBCardBody>
                <MDBCardTitle>Analgesic</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make
                  up the bulk of the card&apos;s content.
                </MDBCardText>
                <MDBBtn outline color="primary" href="#">Add to cart</MDBBtn>
              </MDBCardBody>
            </MDBCard>
            </MDBCol>
            <MDBCol>
            <MDBCard>
              <MDBCardImage className="img-fluid" src={fi4} waves />
              <MDBCardBody>
                <MDBCardTitle>Cheriffer</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make
                  up the bulk of the card&apos;s content.
                </MDBCardText>
                <MDBBtn outline color="primary" href="#">Add to Cart</MDBBtn>
              </MDBCardBody>
            </MDBCard>
            </MDBCol>
          </MDBRow>

        </section>
      </MDBContainer>
    );
  }
}

export default FeaturedItems;