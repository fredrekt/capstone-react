import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="black" className="text-center font-small pb-4 pt-4 mt-4">
      
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright | <a href="#fredgaringo"> Fred Garingo </a>
        </MDBContainer>
    
    </MDBFooter>
  );
}

export default Footer