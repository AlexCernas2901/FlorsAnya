import '../styles/Header.css'

export function Header() {
  return (
    <header>
      <h1 className='florsanya-title'>FlorsAnya</h1>
      <ul className='florsanya-header-ul'>
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
        <li>
          <button className='florsanya-header-ul-button-search'>Buscar</button>
        </li>
      </ul>
    </header>
  )
}
