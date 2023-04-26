export default function Footer() {
  return (
    <footer>
    <div className ='w-full flex justify-center mt-10 xsm:hidden'>
       <img src="/images/Rectangle-14.png"  alt="" className='w-screen h-64 rounded-bl-full rounded-br-full xsm:hidden'/>
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
  )
}
