import React,{useState} from 'react'
import Navbar from './components/Navbar'
import Clients from './components/Clients'
import Form from './components/Form'

const App = () => {

  const [isOpen,setIsOpen] = useState(false)
  const [FormLoad,setFormLoad] = useState('add')


  const handleSubmit = ()=>{
    if(FormLoad==='add'){
      console.log('Form mode add');
    }else{
      console.log('Form mode edit');

    }
  }

    return (
    <div className='w-screen h-screen bg-neutral-950'>
      <Navbar onOpen={()=>setIsOpen(!isOpen)}/>
      <Clients/>
      <Form onSubmit={handleSubmit} isOpen={isOpen} onClose={()=>setIsOpen(false)}/>
    </div>
  )
}

export default App