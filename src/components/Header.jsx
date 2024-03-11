import '../styles/Header.css'
import { HeaderMenu } from '../components/HeaderMenu.jsx'

export function Header() {
  return (
    <header className='florsanya-header'>
      <h1 className='florsanya-title'>FlorsAnya</h1>
      <ul className='florsanya-header-ul'>
        <li>
          <button className='florsanya-header-ul-button-search'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              class='w-6 h-6'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
              />
            </svg>
          </button>
        </li>
        <li>
          <button className='florsanya-header-ul-button'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              class='w-6 h-6'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          </button>
        </li>
      </ul>
    </header>
  )
}
