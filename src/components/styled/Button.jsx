
import styled from "styled-components";
import { H1 } from "./H1";

export const StyledButton = styled.button`
width: 11rem;
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  background: transparent;
  transition:1s;
  color: white;
  cursor: pointer;
  border: 2px solid white;
  background-color:${(props) => props.variant === 'primary' ? '#ffffff' : 'transparent'};
  color:${(props) => props.variant === 'primary' ? '#000' : 'white'};
 
  
`

export const StyledButtonWithHover = styled(StyledButton)`
 &:hover{
    background: #fff;
    color: #000;
    
  }
`
export const H1WithHover = styled(H1)`
 &:hover{
    background: #fff;
    color: #000;
    
  }
`