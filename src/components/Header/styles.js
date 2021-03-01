import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
background: #fff;
`
export const InnerWrapper = styled.div`
width: 60%;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0.6em 0em;
div{
  display: flex;
  align-items: center;
  h3{
    font-family: 'Çormorant Garamond', serif;
    font-weight: 500;
    font-size: 1.8rem;
  }
}
`

export const Logo = styled.img`
width: 32px;
height: auto;
margin-right: 1rem;
`