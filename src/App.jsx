import React from 'react'
import Navbar from './components/Navbar'
import Clients from './components/Clients'
import Form from './components/Form'

const App = () => {
  return (
    <div className='w-screen h-screen bg-neutral-950'>
      <Navbar/>
      <Clients/>
      <Form/>
    </div>
  )
}

export default App