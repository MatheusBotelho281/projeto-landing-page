import React from 'react'
import Button from '../commom/Buttom'
import { TittleWrapper, Wrapper } from './styles'


export default function Banner() {
  return (
    <Wrapper>
      <TittleWrapper>
        <h1>International Luxury Wedding & Event Planner</h1>
        <Button color='white'
        bg='#bf6f5f'
        hoverBg='#804a40'
        text='Plan My Wedding' />
      </TittleWrapper>
    </Wrapper>
  )
}
