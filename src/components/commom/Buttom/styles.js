import styled from 'styled-components'

export const MyButton = styled.button`
padding: 19px 45px;
width: 250px;
font-family: "Poppins", Sans-serif;
background: ${props => props.bg};
border: ${props => props.border || 'none'};
color: ${props => props.color};
letter-spacing:2.6px;
transition: 0.3s;
:hover{
  background: ${props => props.hoverBg};
  color: ${props => props.hoverColor};
}@media only screen and (max-width: 726px){
  width:100%;
}
`
