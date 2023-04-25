import React from 'react'

export default function Navbar() {
  return (
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
          <div className="self-center">
            <button className="rounded-2xl text-white bg-gradient-to-b from-[#564ae7] to-[#564ae9] h-12 w-64">Stared</button>
          </div>
            
        </div>
        </div>
      </div>
      </header>
  )
}
