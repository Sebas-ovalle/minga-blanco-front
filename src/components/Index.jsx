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

        <div className='w-full flex bg-[url(/images/frame.png)] bg-no-repeat bg-cover bg-center m-6 xsm:hidden' >

          <div className='w-6/12 flex justify-around items-center xsm:hidden'>
           <div className='flex justify-center ' onClick={restar}>
          <img className='w-[277px] h-[307px] object-cover' src={categories[counter]?.character_photo} alt="" />
          </div>
          
          <div className='flex justify-center '>
          <img className='w-[180px] h-[284px] mb-5' src={categories[counter]?.cover_photo} alt="" />
          </div>
          
          </div>

          <div className='w-6/12 flex items-center justify-center flex-col xsm:hidden ' onClick={sumar}>
            <h2 className='text-2xl flex-items-center font-medium'>  {categories[counter]?.name}</h2>
          <p className='text-sm font-sans font-normal not-italic flex item-center'>{categories[counter]?.description} </p>
          </div>
        </div>
      </div>
      </main>
  )
}
