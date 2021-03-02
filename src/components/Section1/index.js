import React from 'react'
import Tittle from '../commom/Tittle'
import { Wrapper } from './styles'
import Video from '../Video'

export default function Section1() {
  return (
    <Wrapper>
      <Tittle tittle='Celebrating Love With Us'
      tittleText='Blandit cursus risus at ultrices mi tempus imperdiet. 
      Vulputate mi sit amet mauris commodo quis imperdiet. 
      Porta nibh venenatis cras sed felis eget velit.' />
      <Video />
    </Wrapper>
  )
}
