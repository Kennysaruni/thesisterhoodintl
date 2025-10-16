import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import About from './Components/About'
import News from './Components/News'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar/>
      {/* <Hero/> */}
      {/* <About/> */}
      <News/>
      <Footer/>
    </div>
  )
}

export default App
