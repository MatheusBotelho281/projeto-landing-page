import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 700px;
@media only screen and (max-width: 726px){
  width: 90%;
} 
h2{
  font-family: "Cormorant Garamond", Sans-serif;
  font-weight: 500;
  font-size: 3.5rem;
  text-align: center;
  @media only screen and (max-width: 726px){
    font-size: 3rem;
  }
}
p{
  color: #6E6E6E;
  font-family: "Poppins", Sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.8px;
  text-align: center;
}
`
