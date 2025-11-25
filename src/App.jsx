import './App.css'
import { Routes, Route, HashRouter } from 'react-router-dom'
import Navigation from './components/navigation/Navigation.jsx'
import Home from './pages/home/Home.jsx'
import PokemonDetails from './pages/pokemon-details/PokemonDetails.jsx'
import Gallery from './pages/gallery/Gallery.jsx'
import About from './pages/about/About.jsx'
import Pokemons from './pages/pokemons/Pokemons.jsx'
import Footer from './components/footer/Footer.jsx'
import Error from './pages/error/Error.jsx'

function App() {

  return (
      <HashRouter>
        <Navigation/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/pokemon-gallery' element={<Gallery />} />
            <Route path='/pokemons' element={<Pokemons />} />
            <Route path='/pokemons/:id' element={<PokemonDetails />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<Error />} />
          </Routes>
          <Footer/>
      </HashRouter>
  )
}

export default App
