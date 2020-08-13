import React from "react";
import axios from "axios"
import styled from "styled-components"

const StyledFooter = styled.div`
background-color:${props => props.theme.black};
color:${props => props.theme.primaryColor};
border:10px dotted ${props => props.theme.tertiaryColor};
`

export default function Footer(props) {
    const {imageInfo} = props


    return (
        <StyledFooter className = 'footer'>
            <h4>Credit: {imageInfo.copyright}</h4>
        </StyledFooter>
    )
}