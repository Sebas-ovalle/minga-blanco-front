import apiUrl from '../api'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Index from './components/Index'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)
  console.log(apiUrl)
  console.log(process.env.NODE_ENV)

  return (
    <>
      <Navbar />

      <Index />

      <Footer />
      

     {/* movile */}
    
        <div className='xsm:w-full xsm:min-h-screen xsm:bg-[url(/images/branden-movile.png)] xsm:bg-no-repeat xsm:bg-cover xsm:bg-center md:hidden'>

          <div className='xsm:w-full xsm:h-96 xsm:flex xsm:justify-between xsm:pt-6 lg:hidden'>
           <div className='xsm:m-3 '>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#564ae7" class="w-8 h-8 md:hidden">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>
          </div>
          <div className='xsm:m-3 lg:hidden'>
          <img src="/images/Logo.png" alt="" className='xsm:w-8 xsm:h-8' />
          </div>
          </div>

          <div className='xsm:w-full xsm:h-16 xsm:flex xsm:justify-center xsm:flex-col'>

              
              <img src="/images/favorite-movile.png" alt="" className='xsm:m-4' />

              <img src="/images/text-movile.png" alt="" className='xsm:m-4' />

              <div className="xsm:self-center xsm:m-6 xsm:h-32 md:hidden"><button className="xsm:rounded-3xl xsm:text-white xsm:bg-gradient-to-b xsm:from-[#564ae7] xsm:to-[#564ae9] xsm:h-12 xsm:w-64">Stared</button></div>

          </div>

        </div>

    </>
  
  )
}  
export default App

