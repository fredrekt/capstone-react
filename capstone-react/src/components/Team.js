import React from "react";
import { MDBIcon, MDBRow, MDBContainer, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBAnimation } from 'mdbreact'
import dev1 from '../img/pp.jpg'
import dev2 from '../img/dev2.jpg'
import dev3 from '../img/dev3.jpg'
import dev4 from '../img/dev4.jpg'
import Slide from 'react-reveal/Slide'

const Team = () => {
  return (
    <Slide up>
        <div className="team-container">
            <h1 className="t-header">Our Developers</h1>
            <p className="grey-text text-center">
                Our Team, consists of Web Developer, Mobile Developer, <br/>Researcher, Database Engineer, UI/UX Designer & Content Provider.
            </p>
            <MDBContainer>
                <MDBRow>    
                    <MDBCol style={{ maxWidth: "22rem" }}>
                        <MDBCard>
                            <MDBCardImage className="img-fluid" src={dev1}
                            waves />
                            <MDBCardBody>
                            <MDBCardTitle className="t-head">Fredrick Garingo</MDBCardTitle>
                            <MDBCardText className="t-subh">Full Stack Developer</MDBCardText>
                            <div className="align-center">
                                <MDBIcon className="t-icon" fab icon="android" />
                                <MDBIcon className="t-icon" icon="code" />
                                <MDBIcon className="t-icon" icon="database" />
                                <MDBIcon className="t-icon" fab icon="github" /><br/>
                                <MDBIcon className="t-icon" fab icon="bootstrap" />
                                <MDBIcon className="t-icon" fab icon="react" />
                                <MDBIcon className="t-icon" fab icon="node-js" />
                                <MDBIcon className="t-icon" fab icon="npm" />
                            </div>
                            
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol style={{ maxWidth: "22rem" }}>
                        <MDBCard>
                            <MDBCardImage className="img-fluid" src={dev2}
                            waves />
                            <MDBCardBody>
                            <MDBCardTitle className="t-head">John Romer</MDBCardTitle>
                            <MDBCardText className="t-subh">Web Developer</MDBCardText>
                            <div className="align-center">
                                <MDBIcon className="t-icon" fab icon="android" />
                                <MDBIcon className="t-icon" icon="code" />
                                <MDBIcon className="t-icon" icon="database" />
                                <MDBIcon className="t-icon" fab icon="github" /><br/>
                                <MDBIcon className="t-icon" fab icon="react" />
                                <MDBIcon className="t-icon" fab icon="node-js" />
                                <MDBIcon className="t-icon" fab icon="npm" />
                            </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol style={{ maxWidth: "22rem" }}>
                        <MDBCard>
                            <MDBCardImage className="img-fluid" src={dev3}
                            waves />
                            <MDBCardBody>
                            <MDBCardTitle className="t-head">Clydde Necosia</MDBCardTitle>
                            <MDBCardText className="t-subh">Mobile Developer</MDBCardText>
                            <div className="align-center">
                                <MDBIcon className="t-icon" fab icon="android" />
                                <MDBIcon className="t-icon" icon="code" />
                                <MDBIcon className="t-icon" icon="file-alt" />
                                <MDBIcon className="t-icon" fab icon="github" /><br/>
                                <MDBIcon className="t-icon" icon="binoculars" />
                                <MDBIcon className="t-icon" icon="images" />
                            </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol style={{ maxWidth: "22rem" }}>
                        <MDBCard>
                            <MDBCardImage className="img-fluid" src={dev4}
                            waves />
                            <MDBCardBody>
                            <MDBCardTitle className="t-head">Shuallom Bariquatro</MDBCardTitle>
                            <MDBCardText className="t-subh">Web Developer</MDBCardText>
                            <div className="align-center">
                                <MDBIcon className="t-icon" icon="list-alt" /> 
                                <MDBIcon className="t-icon" icon="code" />
                                <MDBIcon className="t-icon" icon="file-alt" />
                                <MDBIcon className="t-icon" fab icon="github" /><br/>
                                <MDBIcon className="t-icon" icon="keyboard" />
                                <MDBIcon className="t-icon" fab icon="css3-alt" />
                            </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    </Slide>
  );
}

export default Team;