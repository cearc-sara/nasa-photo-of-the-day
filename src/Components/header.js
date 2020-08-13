import React from "react";
import axios from "axios"
import styled from "styled-components"

const StyledHeader = styled.div`
background-color:${props => props.theme.black};
color: ${props => props.theme.primaryColor};
border:10px dotted ${props => props.theme.tertiaryColor};

h1{
    display:flex;
    justify-content:flex-start;
    margin:${props => props.theme.margins.small};
}

h3{
    display:flex;
    justify-content:flex-end;
    margin:${props => props.theme.margins.small};
}
`


export default function Header(props) {
    const {title, date} = props


    return (
        <StyledHeader className = 'header'>
            <h1>NASA Photo of the Day</h1>
                <h2>{title}</h2>
                    <h3>{date}</h3>
        </StyledHeader>
    )
}