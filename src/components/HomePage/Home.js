import React from "react"
import styled from "styled-components"


const Home = ()=>{
    return(
        <Contaner>
            <Wrapper>
                <TextHolder>
                    <H1>phython is an easy to learn powerful programming</H1>
                    <P>the phython interpreter and extensive standard library are freely available in source or binary form for all</P>
                    <Btn>Get Started</Btn>
                    <InconHolder>
                 <Tex>our patner</Tex>
                 <Div></Div>
                 <Cd src="/codelab.png" alt=""/>
                 <Tl src="/swin.png" alt=""/>
             
                    </InconHolder>
                </TextHolder>
                

                <ImgHolder>
                <img src="/illustration.png" alt=""/>
                </ImgHolder>
                 </Wrapper>
        </Contaner>
    )
}
export default Home;


const Contaner = styled.div`
min-height:100vh;
height:100%;
width:100%;
background:#BED5FF;
margin-top:-21px;
background-image:url("/background.png");
display:flex;
align-items:center;
justify-content:center;
`
const Wrapper = styled.div`
width:89%;
height:800px;
display:flex;
align-items:center;
justify-content:space-between;
@media (max-width:768px){
    flex-direction:column-reverse
}
`
const TextHolder = styled.div`
/* height:0px; */
`
const H1 = styled.div`
font-size:48px;
width:690px;
font-weight:bold;
`
const P = styled.p`
width:520px;
font-size:27px;
`
const Btn = styled.button`
padding:20px 47px;
border-radius:5px;
font-size:20px;
border:none;
outline:none;
background:#74ADFF;
color:white;
cursor:pointer;
:hover{
background:lightblue;
}
`
const ImgHolder = styled.div`
margin-bottom:150px;
img{
    /* margin-left:40px;
     */
   width:100%;
}
`
const InconHolder = styled.div`
margin-top:100px;
display:flex;
width:430px;
/* padding:180px 0px 0px 0px; */
align-items:center;
justify-content:space-between;
/* object-fit:cover; */
`
const Tex = styled.div`
font-size:20px;
font-weight:500;
width:5px;

`
const Div = styled.div`
width:1px;
height:100px;
background:black;
`
const Tl = styled.img`
width:95px;
object-fit:cover;
`

const Cd = styled.img`
object-fit:contain;
`