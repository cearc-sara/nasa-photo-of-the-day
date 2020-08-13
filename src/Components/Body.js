import React from "react";
import axios from "axios"
import styled from "styled-components"




const StyledBody = styled.div`
background-color:${props => props.theme.black};
padding:${props => props.theme.paddingSmall};
display:flex;
flex-wrap:wrap;
img{
    width:50%;
    padding:${props => props.theme.paddingMedium};
    
}
p{
    width:40%;
    padding:${props => props.theme.paddingMedium};
    font-size:${props => props.theme.fontSize};
    color:${props => props.theme.secondaryColor};
}
`


export default function Body(props) {
    const {image, text} = props


    return (
        <StyledBody className = 'body'>
            <img src={image} alt=''/>
                <p>{text}</p>
                
        </StyledBody>
    )
}






