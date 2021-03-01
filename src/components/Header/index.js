import { Wrapper, InnerWrapper, Logo } from './styles'
import HeaderLink from '../commom/HeaderLink'

export default function Header(){
  return(
    <Wrapper>
      <InnerWrapper>
        <div>
        <Logo src='./media/logo.png' alt='Landing Page' />
        <h3>Sweeding</h3>
        </div>        
        <div>
          <HeaderLink TextoDoLink='Home' />
          <HeaderLink TextoDoLink='Sobre' />
          <HeaderLink TextoDoLink='Contato' />
          <HeaderLink TextoDoLink='Portifolio' />
          <HeaderLink TextoDoLink='Cadastrar' />
        </div>
      </InnerWrapper>
    </Wrapper>
  )
}