import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact'

const Company = () =>{
    return(
        <div className="company-container">
            <h1 className="comp-header">
                Contact Us
            </h1>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol>
                            <h2 className="comp-header-sub">
                                Where Are We?
                            </h2>
                            <div className="embed-responsive embed-responsive-16by9">
                                {/* <iframe title="embedsPage" className="embed-responsive-item" src="https://player.vimeo.com/video/137857207"
                                    allowfullscreen></iframe> */}
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2545.4140461635307!2d123.88041341755822!3d10.296582222510528!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99c015a4bf233%3A0x95d783198f4634f8!2sCebu%20Institute%20of%20Technology%20-%20University!5e0!3m2!1sen!2sph!4v1567571293782!5m2!1sen!2sph" width={600} height={450} frameborder={0} style={{'border':'0'}} allowfullscreen=""></iframe>
                            </div>
                        </MDBCol>
                        <MDBCol>
                            <div className="hr-comp">
                                <h3 className="comp-header-c">Take What You Need</h3>
                                    <p className="comp-content">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus eget velit a egestas. Curabitur fringilla rutrum ipsum non convallis. Proin pulvinar sed metus non consectetur. Ut consectetur elit et viverra interdum.
                                    </p>
                                        <a className="comp-email" href="mailto:fredrickjohng6@gmail.com">fullstackdevelopers@gmail.com</a>  
                                        <br/>
                                        <a className="comp-email" href="tel:123-456-7890">452-092-9123</a>
                                            <p className="comp-social grey-text">
                                                Follow Us:
                                                <div className="social-icons">
                                                <MDBIcon fab size="2x" icon="facebook-square" />
                                                <MDBIcon className="ml-2" fab size="2x" icon="twitter-square" />
                                                <MDBIcon className="ml-2" fab size="2x" icon="google-plus-square" />
                                                </div>
                                                
                                            </p>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
        </div>
    )
}
export default Company