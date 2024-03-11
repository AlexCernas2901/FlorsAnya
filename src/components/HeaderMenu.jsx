import { ArrowRightIcon } from '../icons/HeaderIcons.jsx'

export function HeaderMenu() {
  return (
    <div>
      <span>Catalogo</span>
      <ul id='catalogo'>
        <li>
          <span>
            <label htmlFor='catalogo'>Damas</label>
            <button>
              <ArrowRightIcon />
            </button>
          </span>
        </li>
        <li>
          <span>
            <label htmlFor='catalogo'>Caballeros</label>
            <button>
              <ArrowRightIcon />
            </button>
          </span>
        </li>
        <li>
          <span>
            <label htmlFor='catalogo'>Niñas</label>
            <button>
              <ArrowRightIcon />
            </button>
          </span>
        </li>
        <li>
          <span>
            <label htmlFor='catalogo'>Niños</label>
            <button>
              <ArrowRightIcon />
            </button>
          </span>
        </li>
      </ul>
    </div>
  )
}
