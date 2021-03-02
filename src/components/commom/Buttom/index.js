import React from 'react'
import { MyButton } from './styles'

export default function Button(props) {
  return (
    <div>
      <MyButton bg={props.bg}
      border={props.border}
      color={props.color}
      hoverBg={props.hoverBg}
      hoverColor={props.hoverColor}>
      {props.text}
      </MyButton>
    </div>
  )
}
