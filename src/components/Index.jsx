import {useState,useEffect} from 'react'
import axios from 'axios'
import apiUrl from '../../api'

export default function Index() {
  useEffect(
    ()=>{axios(apiUrl+ 'categories').then(res=>setCategories(res.data.categories)).catch(err=>console.log(err))},
    []
  )
  let [categories,setCategories] = useState([])
  console.log(categories)
  let [counter,setCounter] = useState(0)
  console.log(counter)
  let sumar = () => {
   setCounter(counter +1)
   if (counter===categories.length-1){
    setCounter(0)
   }

  }
  let restar = ()=>{
    console.log(counter)
    setCounter(counter -1)
    if(counter===0){
      setCounter(categories.length-1)
    }
  }

  return (
    <main className='min-h-screen xsm:hidden'>
      
      <div className='w-full flex justify-center mt-6 xsm:hidden'>

        <div className='w-full flex bg-[url(/images/Frame.png)] bg-no-repeat bg-cover bg-center m-6 xsm:hidden rounded-1xl' >

          <div className='w-8/12 flex justify-between items-center xsm:hidden mr-4'>
          
           <svg class="h-10 w-10 text-black flex justify-center items-center" onClick={restar} fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"/>
           </svg>

           <div className='flex justify-center'>
           <img className='w-[277px] h-[307px] object-cover' src={categories[counter]?.character_photo} alt="" />
           </div>
          
           <div className='flex justify-center '>
           <img className='w-[180px] h-[284px] mb-5' src={categories[counter]?.cover_photo} alt="" />
           </div>
          </div>

          <div className='w-6/12 flex justify-between items-center xsm:hidden ml-4'>
           <div className=' w-8/12 flex justify-center flex-col xsm:hidden '>
           <h2 className='text-2xl flex-items-center font-medium'>  {categories[counter]?.name}</h2>
           <p className='text-sm font-sans font-normal not-italic flex item-center'>{categories[counter]?.description} </p>
           </div> 

           <svg class="h-10 w-10 text-black flex justify-center items-center" onClick={sumar}  fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
           </svg>
          </div>

          

          
        </div>
      </div>
      </main>
  )
}
