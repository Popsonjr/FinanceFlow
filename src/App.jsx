import React from 'react'
import { Navbar, Hero, Clients } from './components'

const App = () => {
  return (
    <div className='w-full bg-primary text-white overflow-hidden'>
      <Navbar />
      <Hero />
      <Clients />
    </div>
  )
}

export default App