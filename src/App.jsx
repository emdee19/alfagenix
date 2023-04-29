import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { Header } from './components/header/Header'
import { Hero } from './components/containers/hero/Hero'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      {/* HEADER */}
      <Header />

      {/* CONTAINERS */}
      <Hero />

      {/* FOOTER */}
      <Footer />
    </>
  )
}

export default App
