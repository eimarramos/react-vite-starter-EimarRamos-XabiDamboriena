import { NavbarComponent } from './components/Navbar/Navbar'
import { HomeComponent } from './pages/Home/Home'
import { FooterComponent } from './components/Footer/Footer'
import { pokemonApiRepository } from './infrastructure/api/pokeapi/pokemonRepository/pokeApiRepository'
import { pokemonService } from './services/pokemonService/pokemonService'

pokemonService.init(pokemonApiRepository)

function App() {
  return (
    <>
      <NavbarComponent />
      <main>
        <HomeComponent />
      </main>
      <FooterComponent />
    </>
  )
}

export default App
