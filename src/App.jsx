import React from 'react'
import { Navbar, Hero, Clients, Features } from './components'

const App = () => {
  return (
    <div className='w-full bg-primary text-white overflow-hidden'>
      <Navbar />
      <Hero />
      <Clients />
      <Features />
    </div>
  )
}

export default App