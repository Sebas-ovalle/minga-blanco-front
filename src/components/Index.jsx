import React from 'react'

export default function Index() {
  return (
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
  )
}
