import styled from "styled-components";

export const RatingCardWrapper = styled.div`
border-radius:20px;
width:100%;
max-width:450px;
min-width:450px;
background-color:hsl(213, 19%, 18%);
padding:2.2rem;

`
export const RatingIconBox = styled.div`
border-radius:50%;
width:50px;
height:50px;
background-color:hsl(210, 16%, 22%);
display:grid;
place-items:center;
`
export const H1 = styled.h1`
color:white;
font-size:1.8rem;
letter-spacing:1.5px;
margin:2rem 0 1rem 0;
text-align:left
`
export const P = styled.p`
color:hsl(217, 12%, 63%);
font-size:1rem;
margin:1rem 0 2rem 0;
text-align:left
`
export const StarButton = styled(RatingIconBox)`
    cursor:pointer;
    font-size:1rem;
    border:none;
    outline:none;
    display:inline-block;
    font-weight:700;
    color:#ffffff;
    background-color: ${({ seleted }) => seleted ? 'hsl(25, 97%, 53%' : 'hsl(210, 16%, 22%)'}  );
    &:not(:last-child){
        margin-right:1rem
    }
    &:hover{
        background-color:hsl(25, 97%, 53%);
        transition: all 0.2s;
    }
`
export const SubmitButton = styled.button`
 width:100%;
 background-color:hsl(25, 97%, 53%);
 border-radius:20px;
 margin-top:2rem;
 padding:.8rem 2rem;
 color:#ffffff;
 font-size:1rem;
    border:none;
    outline:none;
    font-weight:700;
    cursor:pointer;
    &:hover{
        background-color:#ffffff;
    color:hsl(25, 97%, 53%);
    transition: all 0.2s;
    }


`