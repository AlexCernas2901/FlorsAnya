import '../styles/Header.css'
import { SearchIcon, MenuIcon, CloseMenu } from '../icons/HeaderIcons.jsx'
import { HeaderMenu } from '../components/HeaderMenu.jsx'
import { useState } from 'react'
import logo from '../assets/logo.png'

export function Header() {
  const [menu, setMenu] = useState(false)

  const handleClick = () => {
    setMenu(!menu)
  }

  return (
    <header className='header'>
      <div className='header-div-container'>
        <img src={logo} alt='' />
        <a href='#' className='title'>
          FlorsAnya
        </a>
        <nav>
          <ul className='nav-list'>
            <li>
              <button className='nav-button' aria-label='Search'>
                <SearchIcon />
              </button>
            </li>
            <li>
              <button
                className='nav-button'
                aria-label='Menu'
                onClick={handleClick}
              >
                {menu ? <CloseMenu /> : <MenuIcon />}
              </button>
              {menu && <HeaderMenu />}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
