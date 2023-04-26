import { useState } from 'react'
import './App.css'
import Main from './layout/Main'
import Index from './components/Index'

import apiUrl from '../api'


function App() {
  
  console.log(apiUrl)
  console.log(process.env.NODE_ENV)
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  }
  return (
    <>
    {/* HOME DESKTOP */}
     <Main> 
     <Index /> 
     </Main> 

     {/* MOVILE */}
    
        <div className='xsm:w-full xsm:h-full xsm:bg-[url(/images/branden-movile.png)] xsm:bg-no-repeat xsm:bg-cover xsm:bg-center md:hidden'>

          <div className='xsm:w-12/12 xsm:h-96 xsm:flex xsm:justify-between xsm:pt-6 lg:hidden flex-col'>

          <nav className="flex w-fill justify-between">
            
          <div className="relative">
          <button onClick={handleMenuClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#564ae7"
                className="w-[57px] h-[55px] m-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
      {showMenu && (
        <div className="flex justify-center absolute top-full left-0 w-screen h-[730px] bg-[#564ae7]/90 rounded-md py-2 z-10">
        <ul>
          <li><a className="flex px-4 py-2 text-white-800 hover:bg-violet2 font-medium" href="#">Home</a></li>
          <li><a className="flex px-4 py-2 text-white-800 hover:bg-violet2 font-medium" href="#">Manga</a></li>
          <li><a className="flex px-4 py-2 text-white-800 hover:bg-violet2 font-medium" href="#">Logout</a></li>
          <li><a className="flex px-4 py-2 text-white-800 hover:bg-violet2 font-medium" href="#">Favorite</a></li>
        </ul>
        </div>
      )}    
      </div>
          <a href="#">
          <img src="/images/Logo.png" className="w-[50px] h-[50px] m-4" alt="Logo Minga" />
          </a>
      </nav>
          
          <div className='xsm:w-full xsm:h-32 xsm:flex xsm:justify-center xsm:flex-col'>
              <img src="/images/favorite-movile.png" alt="" className='xsm:m-4' />
              <img src="/images/text-movile.png" alt="" className='xsm:m-4' />
              <div className="xsm:self-center xsm:m-6 xsm:h-32 md:hidden"><button className="xsm:rounded-3xl xsm:text-white xsm:bg-gradient-to-b xsm:from-[#564ae7] xsm:to-[#564ae9] xsm:h-12 xsm:w-64">Stared</button></div>
          </div>

          </div>

          <footer className="mt-96">
           
           <div className="flex items-center justify-around bg-[#564ae7]">
           <div className="flex gap-10 text-white font-bold">
            <h5>Home</h5>
            <h5>Mangas</h5>
            </div>
            <div className="pb-5 flex items-center ">
            <img src="/images/Frame-sociales.png" className="w-[5rem] flex items-center justify-between mt-4"/>
            </div>
           </div>
            </footer>
          
        </div>
        

    </>
  
  )
}  
export default App

