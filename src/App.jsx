import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { Header } from './components/header/Header'
import { Navbar } from './components/navbar/Navbar'
import { Hero } from './components/containers/hero/Hero'
import Footer from './components/footer/Footer'
import { Howworks } from './components/containers/stepsContainer/Howworks'

function App() {

  return (
    <>
      {/* HEADER */}
      <Header />
      
      {/* NAVBAR */}
      <Navbar />

      {/* CONTAINERS */}
      <Hero />
      <Howworks />

      {/* FOOTER */}
      <Footer />
    </>
  )
}

export default App
