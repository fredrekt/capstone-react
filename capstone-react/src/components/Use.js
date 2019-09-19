import React from 'react'
import { MDBRow, MDBContainer, MDBCol } from 'mdbreact'
import Slide from 'react-reveal/Slide'

const Use = () =>{
    return(
        <Slide up>
            <div className="use-container">
                <h1 className="u-header">How to Use</h1>
                <p className="grey-text text-center">This section will guide users on how to use our Software: Medishop.</p>
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol>
                                <h2 className="u-header-sub">Medishop Guide</h2>
                                <p className='use-inst grey-text'>
                                    In order to know how to use our Software, one must need an Account. User must register or create an account. User must provide necessary information needed so that the user can create an account. It is vital that the use must provide the correct details and information about them before proceeding to the next step. After creating an account, the user must sign in or login to its account. Make sure that the user has entered the correct username and password. After signing in or logging in user can choose to go to Medicines section, where the medicines are located and which can be bought by the users. After visiting the Medicines section, user can add the medicine to cart and can also remove it from cart. After doing that the user can checkout and therefore pay for the items in the cart. Easy as 1, 2 & 3, and don't even worry. We designed this to be User Friendly, it is easy to use and not confusing.
                                </p>
                                </MDBCol>
                                <MDBCol>
                                <div className="embed-responsive embed-responsive-16by9 mt-4">
                                <iframe className="embed-responsive-item mt-4" src="https://www.youtube.com/embed/RILP53OR63k" allowfullscreen></iframe>
                                </div>
                                <p className='grey-text mt-2'>This video is made possible by: Open Broadcaster Software<br/>
                                
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
            </div>
        </Slide>
    )
}
export default Use