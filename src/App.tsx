import { NavbarComponent } from './components/Navbar/Navbar'
import { HomeComponent } from './pages/Home/Home'
import { FooterComponent } from './components/Footer/Footer'

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
