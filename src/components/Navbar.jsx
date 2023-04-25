import {useState} from 'react'

export default function Navbar() {

  const [showMenu, setShowMenu] = useState(false)
  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  }

  return (
    <header>
      <div className ='w-full h-96 bg-[url(/images/fondo-container.png)] bg-no-repeat bg-cover bg-center xsm:hidden'>
         
      <nav className="flex w-fill justify-between">
        <div className="relative">
          <button onClick={handleMenuClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#564ae7"
                className="w-[57px] h-[55px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
      {showMenu && (
        <div className="flex justify-center absolute top-full left-0 w-[500px] bg-[#564ae7]/60 rounded-md py-2 z-10">
        <ul>
          <li><a className="flex px-4 py-2 text-white-800 hover:bg-violet2 font-medium" href="#">Home</a></li>
          <li><a className="flex px-4 py-2 text-white-800 hover:bg-violet2 font-medium" href="#">Manga</a></li>
          <li><a className="flex px-4 py-2 text-white-800 hover:bg-violet2 font-medium" href="#">Logout</a></li>
        </ul>
        </div>
      )}    
      </div>
          <a href="#">
          <img src="/images/Logo.png" className="w-[60px] h-[60px]" alt="Logo Minga" />
          </a>
      </nav>

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
