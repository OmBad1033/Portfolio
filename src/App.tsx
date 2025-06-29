import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'

const App = () => {
  return (
    <div className='relative w-screen min-h-screen overflow-x-auto'>
      <Navbar/>
      <Hero/>
      <section id="services" className='min-h-screen bg-amber-400'/>
      <section id="work"className='min-h-screen bg-green-400'/>

    </div>
  )
}

export default App