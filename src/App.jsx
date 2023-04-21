import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main className='min-h-screen'>
    <header>
      <div className ='w-full h-96 bg-[url(/src/assets/images/fondo-container.png)] bg-no-repeat bg-cover bg-center'>

        <div className='flex justify-between p-6'>
         <img src="/src/assets/images/Menu.png" alt="" /> 
         <img src="/src/assets/images/Logo.png" alt="" />
        </div>

        <div className='w-full flex justify-center items-center flex-col'>
          <div className='flex justify-center items-center flex-col p-2 '>
            <img src="/src/assets/images/favorite.png" alt="" />
            <img src="/src/assets/images/catalog.png" alt="" />
            <img src="/src/assets/images/button read.png" alt="" />
           </div>
        </div>
      </div>
      </header>
      
      <div className='w-full flex justify-center mt-6'>

        <div className='w-full flex bg-[url(/src/assets/images/frame.png)] bg-no-repeat bg-cover bg-center m-6'>

          <div className='w-6/12 flex justify-around items-center'>
           <div className='flex justify-center '>
          <img src="/src/assets/images/person.png" alt="" />
          </div>
          <div className='flex justify-center '>
          <img className='mb-10' src="/src/assets/images/image-3.png" alt="" />
          </div>
          

          </div>

          <div className='w-6/12 flex items-center'>
          <img src="/src/assets/images/Frame-text.png" alt="" />
          </div>
        </div>
      </div>
      </main>
      <footer>

       <div className ='w-full flex justify-center mt-10'>
          <img src="/src/assets/images/Rectangle-14.png" className='w-screen rounded-bl-full rounded-br-full' alt="" />
       </div>
       <div className ='w-full flex justify-center '>

        <div className ='w-10/12 flex justify-between mt-6'>
        <div className='w-2/12 flex justify-around'>
        <h2>Home</h2>
        <h2>Mangas</h2>
        </div>
        <img src="/src/assets/images/Frame-logo.png" alt="" />
        <img src="/src/assets/images/Frame-sociales.png" alt="" />
        
        </div>

       </div>
       
      </footer>
      
    </>
  )
}

export default App
