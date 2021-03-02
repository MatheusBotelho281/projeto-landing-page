import {useState} from 'react'
import { Wrapper, InnerWrapper, Logo } from './styles'
import HeaderLink from '../commom/HeaderLink'
import Menu from '../HeaderMenu'

export default function Header(){

  return(
    <Wrapper>
      <InnerWrapper>
        <div>
        <Logo src='./media/logo.png' alt='Landing Page' />
        <h3>Sweeding</h3>
        </div>        
        <div>
          <div><HeaderLink TextoDoLink='Home' /></div>
          <div><HeaderLink TextoDoLink='Sobre' /></div>
          <div><HeaderLink TextoDoLink='Contato' /></div>
          <div><HeaderLink TextoDoLink='Portifolio' /></div>
          <div><HeaderLink TextoDoLink='Cadastrar' /></div>
          <Menu />
        </div>
      </InnerWrapper>
    </Wrapper>
  )
}