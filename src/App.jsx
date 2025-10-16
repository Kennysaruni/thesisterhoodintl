import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import About from './Components/About'
import News from './Components/News'
import ContactUs from './Components/ContactUs'
import Membership from './Components/Membership'
import Donate from './Components/Donate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar/>
      {/* <Hero/> */}
      {/* <About/> */}
      {/* <News/> */}
      {/* <ContactUs/> */}
      {/* <Membership/> */}
      <Donate/>
      <Footer/>
    </div>
  )
}

export default App
