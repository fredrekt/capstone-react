import React from 'react'
import { MDBIcon, MDBTooltip } from 'mdbreact'
import ScrollUpButton from "react-scroll-up-button"

const ScrollButton = () =>{
    return(
        <div>
            <ScrollUpButton
                ContainerClassName="AnyClassForContainer"
                TransitionClassName="AnyClassForTransition"
                >
                    <MDBIcon icon="arrow-up" />
                </ScrollUpButton>     
        </div>
    )
}
export default ScrollButton