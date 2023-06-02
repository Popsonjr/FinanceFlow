import React from 'react'
import { Navbar, Hero } from './components'

const App = () => {
  return (
    <div className='w-full bg-primary text-white overflow-hidden'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default App