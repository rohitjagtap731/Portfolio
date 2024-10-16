import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import About from './Components/About/About.jsx'
import Services from './Components/Services/Services.jsx'
import MyWork from './Components/MyWork/MyWork.jsx';

const App = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Services/>
        <MyWork/>
    </div>
  )
}

export default App