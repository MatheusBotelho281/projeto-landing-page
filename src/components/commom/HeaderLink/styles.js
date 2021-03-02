import styled from 'styled-components'

export const Anchor = styled.a`
color: #BF6f5f;
padding: 13px 0;
cursor: pointer;
border-bottom: solid 2px transparent;
margin-right: 1rem;
font-family: 'Poppins', sans-serif;
:hover{
  border-bottom: 2px solid #BF8770;
}
@media only screen and (max-width: 1024px){
  display:none;
}
`