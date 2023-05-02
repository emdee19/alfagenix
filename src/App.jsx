import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { Header } from './components/header/Header'
import { Navbar } from './components/navbar/Navbar'
import { Hero } from './components/containers/hero/Hero'
import Footer from './components/footer/Footer'
import { Howworks } from './components/containers/stepsContainer/Howworks'
import { Personalized } from './components/containers/personalizedContainer/Personalized'
import { Health } from './components/containers/healthContainer/Health'

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
      <Personalized />
      <Health />

      {/* FOOTER */}
      <Footer />
    </>
  )
}

export default App
