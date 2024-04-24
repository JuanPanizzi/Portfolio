import './App.css'
import { AboutMe } from './Components/AboutMe'
import { Contact } from './Components/Contact'
import { Contacto } from './Components/Contacto'
import { Footer } from './Components/Footer'
import { Habilidades } from './Components/Habilidades'
import { Navbar } from './Components/Navbar'
import { Presentation } from './Components/Presentation'
import { Proyectos } from './Components/Proyectos'
// import { Technologies } from './Components/CardTechno'

function App() {

  return (
    <>
    <Navbar/>
    <Presentation/>
    <Proyectos/>
    <Habilidades/>
    <AboutMe/>
    {/* <Contacto/> */}
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
