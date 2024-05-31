import React from 'react'
import Navbar from './Components/Navbar'
import Landing from './Components/Landing'
import Marque from './Components/Marque'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Featured from './Components/Featured'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import Ready from './Components/Ready'
import LocomotiveScroll from 'locomotive-scroll';

function App() {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className=' w-full h-screen bg-zinc-900 '>
      <Navbar/>
      <Landing/>
      <Marque/>
      <About/>
      <Eyes/>
      <Featured/>
      <Cards/>
      <Ready/>
      <Footer/>
    </div>
  )
}

export default App