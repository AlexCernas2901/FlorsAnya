import '../styles/Header.css'
import { SearchIcon, MenuIcon, CloseMenu } from '../icons/HeaderIcons.jsx'
import { useState } from 'react'

export function Header() {
  const [menu, setMenu] = useState(true)

  const haandleClick = () => {
    setMenu(!menu)
  }

  return (
    <header className='header'>
      <div className='header-div-container'>
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
                onClick={haandleClick}
              >
                {menu ? <MenuIcon /> : <CloseMenu />}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
