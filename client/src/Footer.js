import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="black" style={{'padding':'200px'}} className="footer-size text-center font-small pb-4 pt-4 mt-4">
      
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright | <a href="#fredgaringo"> Fred Garingo </a>
        </MDBContainer>
    
    </MDBFooter>
  );
}

export default Footer