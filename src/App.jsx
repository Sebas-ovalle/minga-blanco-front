import apiUrl from '../api'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log(apiUrl)
  console.log(process.env.NODE_ENV)

  return (
    <>
    
    <header>
      <div className ='w-full h-96 bg-[url(/images/fondo-container.png)] bg-no-repeat bg-cover bg-center xsm:hidden'>

        <div className='flex justify-between p-6 xsm:hidden'>
        <div className=''>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="#564ae7 " class="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>
          </div>
          <div className=''>
          <img src="/images/Logo.png" alt="" className='w-10 h-10' />
          </div>
          </div>



        <div className='w-full flex justify-center items-center flex-col xsm:hidden'>
          <div className='flex justify-center items-center flex-col p-2 xsm:hidden '>
            <img src="/images/favorite.png" alt="" className="m-4"/>
            <img src="/images/catalog.png" alt="" className="m-4"/>
            <div className="self-center"><button className="rounded-2xl text-white bg-gradient-to-b from-[#564ae7] to-[#564ae9] h-12 w-64">Stared</button></div>
            
           </div>
        </div>
      </div>
      </header>
      <main className='min-h-screen xsm:hidden'>
      
      <div className='w-full flex justify-center mt-6 xsm:hidden'>

        <div className='w-full flex bg-[url(/images/frame.png)] bg-no-repeat bg-cover bg-center m-6 xsm:hidden'>

          <div className='w-6/12 flex justify-around items-center xsm:hidden'>
           <div className='flex justify-center '>
          <img src="/images/person.png" alt="" />
          </div>
          <div className='flex justify-center '>
          <img className='mb-10' src="/images/image-3.png" alt="" />
          </div>
          
          </div>

          <div className='w-6/12 flex items-center xsm:hidden'>
          <img src="/images/Frame-text.png" alt=""className="m-3" />
          </div>
        </div>
      </div>
      </main>

      <footer>

       <div className ='w-full flex justify-center mt-10 xsm:hidden'>
          <img src="/images/Rectangle-14.png" className='w-screen h-64 rounded-bl-full rounded-br-full xsm:hidden' alt="" />
       </div>
       <div className ='w-12/12 flex justify-center mb-6 xsm:hidden'>

        <div className ='w-10/12 flex justify-between mt-6 xsm:hidden'>

        <div className='w-2/12 flex justify-around items-center xsm:hidden'>
        <h2>Home</h2>
        <h2>Mangas</h2>
        </div>

        <img src="/images/Frame-logo.png" alt="" />
        <img src="/images/Frame-sociales.png" alt="" />
        
         </div>
         </div>
        </footer>

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

