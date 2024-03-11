import '../styles/Header.css'
import { SearchIcon, MenuIcon } from '../icons/header.jsx'
import { HeaderMenu } from '../components/HeaderMenu.jsx'

export function Header() {
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
              <button className='nav-button' aria-label='Menu'>
                <MenuIcon />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
