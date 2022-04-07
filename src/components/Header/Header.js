import React from "react"
import styled from "styled-components"



const Header = () =>{
    return(
     <Contaner>
<Wrapper>
<LogoDiv>
   <img src="/logo.png" alt=""/>
    </LogoDiv>
    <Navigation>
        <Nav>home</Nav>
        <Nav>about</Nav>
        <Nav>contact</Nav>
        <Nav>services</Nav>
        <Btn>Login</Btn>
    </Navigation>
</Wrapper>
     </Contaner>
    )
}
export default Header;

const Contaner = styled.div`
width:100%;
height:100px;
display:flex;
align-items:center;
justify-content:center;
background:#BED5FF;
background-image:url("/background.png");


`
const Wrapper = styled.div`
width:89%;
align-items:center;
justify-content:space-between;
display:flex;

@media (max-width:768px){
    display:none
}
`
const LogoDiv=styled.div``
const Navigation=styled.div`
width:860px;
display:flex;
align-items:center;
justify-content:space-between;
padding:45px;
`;
const Btn=styled.button`
padding:15px 45px;
border-radius:5px;
background:transparent;
border:1px solid #74ADFF;
outline:none;
font-size:25px;
color:#74ADFF;
:Hover{
    transform:scale(1.1)
}
`;
const Nav =  styled.div`
font-size:23px;
:hover{
 transform:scale(1.1);
 cursor:pointer
}
`
