import React from 'react'
import { FaPowerOff } from 'react-icons/fa'

function AdminHeader() {
  return (
    <>
      <div className='flex justify-between items-center p-3 md:px-20'>
        {/* header top */}
        {/* logo */}
        <div className='flex items-center'>
          <img className='w-12 h-12' src="https://tse2.mm.bing.net/th/id/OIP.gDdy9NZqpXo3S44oMRdtowHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="logo" />
          <h1 className='text-2xl ms-3 font-bold'>Bookstore</h1>
        </div>
        {/* logout */}
        <button className='bg-black text-white px-3 py-2 rounded flex items-center hover:bg-white hover:text-black border font-bold gap-3'>LogOut <FaPowerOff/></button>
      </div>
      {/* header marquee */}
      <div className='bg-black text-white p-3'>
       <marquee> Welcome Admin , you All Set To Manage And Monitor The System. Let's Get into Work !!!</marquee>

      </div>

    </>
  )
}

export default AdminHeader
