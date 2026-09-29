import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Services from './components/services/Services'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
