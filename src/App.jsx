import './styles/App.css'
import { Header } from './components/Header.jsx'

export default function App() {
  return (
    <div className='app'>
      <Header />
      <div className='main-container'>
        <main className='content-section'>Main</main>
        <section className='content-section'>Section1</section>
      </div>
    </div>
  )
}
