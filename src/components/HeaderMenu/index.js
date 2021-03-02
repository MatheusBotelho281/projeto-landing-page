import {useState} from 'react'
import { MenuButton, MenuItems, WrapperMenu } from "./styles"

export default function Menu(){

  const[isMenuOpened, setIsMenuOpened] = useState(false)
  const [linkSelected, setLinkSelected] = useState('home')

  function choosePage(page){
    setLinkSelected(page)
  }

  function ToggleMenu(){
    setIsMenuOpened(!isMenuOpened)
  }

  const Selected = {
    background: '#bf8760',
    color: '#fff'
  }

  return(
    <div>
      <WrapperMenu>
        <MenuButton onClick={ToggleMenu}>
          <img src={isMenuOpened ? './media/close.png' : './media/menu.png'} alt='Menu' />
        </MenuButton>
        <MenuItems
         height={isMenuOpened ? '17.5rem' : '0'}
         bottom={isMenuOpened ? '-17.5rem' : '0'}>
        <div onClick={() => choosePage('home')}
        style={linkSelected == 'home' ? Selected : null}>
          <a>Home</a>
        </div>
        <div onClick={() => choosePage('sobre')}
        style={linkSelected == 'sobre' ? Selected : null}>
          <a>Sobre</a>
        </div>
        <div onClick={() => choosePage('contato')}
        style={linkSelected == 'contato' ? Selected : null}>
          <a>Contato</a>
        </div>
        <div onClick={() => choosePage('portifolio')}
        style={linkSelected == 'portifolio' ? Selected : null}>
          <a>Portifolio</a>
        </div>
        <div onClick={() => choosePage('cadastrar')} 
        style={linkSelected == 'cadastrar' ? Selected : null}>
          <a>Cadastrar</a>
        </div>
        </MenuItems>
      </WrapperMenu>
    </div>
  )
}