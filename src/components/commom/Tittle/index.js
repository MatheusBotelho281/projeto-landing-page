import React from 'react'
import { Wrapper } from './styles'

export default function Tittle(props) {
  return (
    <Wrapper>
      <img src='./media/title.png' />
      <h2>{props.tittle}</h2>
      <p>{props.tittleText}</p>
      {props.children}
    </Wrapper>
  )
}
