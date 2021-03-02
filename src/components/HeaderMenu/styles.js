import styled from 'styled-components'

export const WrapperMenu = styled.div`
@media only screen and (min-width: 1024px){
  display:none!important;
}
`
export const MenuButton = styled.button`
background: #BF8760;
padding: 0.6rem 0.6rem;
display:flex;
align-items:center;
justify-content:center;
margin-right: 1rem;
border: none;
border-radius: 2.5px;
img{
  width: 20px;
}
`
export const MenuItems = styled.div`
font-family: 'Poppins',sans serif;
cursor:pointer;
position: absolute;
left: 0;
bottom: ${props => props.bottom};
width: 100%;
background: #fff;
display:flex;
flex-direction: column;
transition: all 1s;
max-height: ${props => props.height}; 
overflow: hidden;
div{
  width:100%;
  padding: 1rem;
  :hover{
    background: #BF8760;
    color: white;
  }
}
`