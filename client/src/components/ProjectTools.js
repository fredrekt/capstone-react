import React  from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBAvatar, MDBIcon } from "mdbreact";
import Slide from 'react-reveal/Slide'

const ProjectTools = () => {
  return (
    <Slide up>  
      <MDBContainer>
        <section className="text-center my-5">
          <h2 className="pt-header">
            Project Tools
          </h2>
          <MDBCarousel
            activeItem={1}
            length={2}
            slide={true}
            showControls={true}
            multiItem
            showIndications={true}
              
          >
            <MDBCarouselInner>
              <MDBRow>
                <MDBCarouselItem itemId="1">
                  <MDBCol>
                    <p>
                      
                        <img
                          src=""
                          alt=""
                          className="rounded-circle img-fluid"
                        />
                    
                      <h4 className="font-weight-bold mt-4">Github</h4>
                      <h6 className="blue-text font-weight-bold my-3">
                        Software Version Control
                      </h6>
                      <p className="font-weight-normal">
                        <MDBIcon icon="quote-left" className="pr-2" />
                        Used in Software Development, especially in <br/>developing the Web Application.
                      </p>
                      <div className="yellow-text">
                        <MDBIcon icon="star" />
                        <MDBIcon icon="star" />
                        <MDBIcon icon="star" />
                        <MDBIcon icon="star" />
                        <MDBIcon icon="star" />
                      </div>
                    </p>
                  </MDBCol>
                  <MDBCol >
                    <p>
                      
                        <img
                          src=""
                          alt=""
                          className="rounded-circle img-fluid"
                        />
                      
                      <h4 className="font-weight-bold mt-4">Node Package Manager</h4>
                      <h6 className="blue-text font-weight-bold my-3">
                      Javascript Package Manager
                      </h6>
                      <p className="font-weight-normal">
                        <MDBIcon icon="quote-left" className="pr-2" />
                        Packages where i mostly use for <br/>building this User Interface and Design.
                      </p>
                      <div className="yellow-text">
                        <MDBIcon icon="star" />
                        <MDBIcon icon="star" />
                        <MDBIcon icon="star" />
                        <MDBIcon icon="star" />
                        <MDBIcon icon="star" />
                      </div>
                    </p>
                  </MDBCol>
                  <MDBCol  >
                    <p>
                      
                        <img
                          src=""
                          alt=""
                          className="rounded-circle img-fluid"
                        />
                      
                      <h4 className="font-weight-bold mt-4">Trello</h4>
                      <h6 className="blue-text font-weight-bold my-3">
                        Task Assignment
                      </h6>
                      <p className="font-weight-normal">
                        <MDBIcon icon="quote-left" className="pr-2" />
                        Tasks for Developers, Researchers and many <br/>other are assigned and displayed here.
                      </p>
                      <div className="yellow-text">
                        <MDBIcon icon="star" />
                        <MDBIcon icon="star" />
                        <MDBIcon icon="star" />
                        <MDBIcon icon="star" />
                      </div>
                    </p>
                  </MDBCol>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                  <MDBCol >
                    <p>
                      {/* <MDBAvatar className="mx-auto">
                        <img
                          src="https://mdbootstrap.com/img/Photos/Avatars/img%20(4).jpg"
                          alt=""
                          className="rounded-circle img-fluid"
                        />
                      </MDBAvatar> */}
                      <h4 className="font-weight-bold mt-4">Netlify</h4>
                      <h6 className="blue-text font-weight-bold my-3">
                        Application Deployment
                      </h6>
                      <p className="font-weight-normal">
                        <MDBIcon icon="quote-left" className="pr-2" />
                        Used for Web Application Deployment, very useful to let <br/>others see your User Interface; deployed in seconds.
                      </p>
                      <div className="yellow-text">
                        <MDBIcon icon="star" />
                        <MDBIcon icon="star" />
                        <MDBIcon icon="star" />
                        <MDBIcon icon="star" />
                        <MDBIcon icon="star" />
                      </div>
                    </p>
                  </MDBCol>
                  <MDBCol >
                    <p>
                      
                        <img
                          src=""
                          alt=""
                          className="rounded-circle img-fluid"
                        />
                      
                      <h4 className="font-weight-bold mt-4">Database Management</h4>
                      <h6 className="blue-text font-weight-bold my-3">
                        MYSQL Workbench
                      </h6>
                      <p className="font-weight-normal">
                        <MDBIcon icon="quote-left" className="pr-2" />
                        Great GUI for Database, used for handling <br/>data and it is open source.
                      </p>
                      <div className="yellow-text">
                        <MDBIcon icon="star" />
                        <MDBIcon icon="star" />
                        <MDBIcon icon="star" />
                        <MDBIcon far icon="star-half" />
                      </div>
                    </p>
                  </MDBCol>
                  <MDBCol>
                    <p>
                      {/* <MDBAvatar className="mx-auto">
                        <img
                          src="https://mdbootstrap.com/img/Photos/Avatars/img%20(7).jpg"
                          alt=""
                          className="rounded-circle img-fluid"
                        />
                      </MDBAvatar> */}
                      <h4 className="font-weight-bold mt-4">Adobe Photoshop</h4>
                      <h6 className="blue-text font-weight-bold my-3">
                        Photo Editting
                      </h6>
                      <p className="font-weight-normal">
                        <MDBIcon icon="quote-left" className="pr-2" />
                        Used in removing background, resizing images <br/>and manipulating images of course.
                      </p>
                      <div className="yellow-text">
                        <MDBIcon icon="star" />
                        <MDBIcon icon="star" />
                        <MDBIcon icon="star" />
                        <MDBIcon icon="star" />
                        <MDBIcon far icon="star" />
                      </div>
                    </p>
                  </MDBCol>
                </MDBCarouselItem>
              </MDBRow>
            </MDBCarouselInner>
          </MDBCarousel>
        </section>
      </MDBContainer>
    </Slide>
  );
}

export default ProjectTools;