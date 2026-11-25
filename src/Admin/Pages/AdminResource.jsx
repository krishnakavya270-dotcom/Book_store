import React, { useState } from 'react'
import Footer from '../../Components/Footer'
import AdminHeader from '../Components/AdminHeader'
import AdminSidebar from '../Components/AdminSidebar'

function AdminResource() {
  const [currentTab, setCurrentTab] = useState(1)
  return (
    <>
      <AdminHeader />
      <div className='md:grid grid-cols-5'>
        {/* 1 section 1grid*/}
        <div className='col-span-1'>
          <AdminSidebar />

        </div>
        {/* 2 section 4grid */}
        <div className='col-span-4 p-10'>
          <h1 className='text-3xl font-bold text-center my-10'>All Resources</h1>
          <div className='flex justify-center items-center my-8 font-bold text-lg'>
            <p onClick={() => setCurrentTab(1)} className={currentTab == 1 ? 'p-4 border-gray-300 border-l border-t border-r cursor-pointer rounded-xl' : 'p-4 border-gray-300 border-b cursor-pointer rounded'}>Books</p>
            <p onClick={() => setCurrentTab(2)} className={currentTab == 2 ? 'p-4 border-gray-300 border-l border-t border-r cursor-pointer rounded-xl' : 'p-4 border-gray-300 border-b cursor-pointer rounded'}>Users</p>
          </div>
          {/* tab contents */}
          {currentTab == 1 && <div className='md:grid grid-cols-4 w-full my-10'>
            <div className='shadow rounded p-3 m-4 md:my:0'>
              <img width={'100%'} height={'300px'} src="https://tse2.mm.bing.net/th/id/OIP.JYkV2S6z_qLRzO44DW7q7AHaLG?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="book" />
              <div className='flex flex-col justify-center items-center mt-4'>
                <h2 className='text-blue-700 font-bold text-xl'>Author</h2>
                <h3 className='text-lg font-bold'>Title</h3>
                <p className='font-bold text-red-500'>$325</p>
                <button className='bg-green-600 text-white p-3 rounded w-full '>Approve</button>
              </div>
            </div>
          </div>}
          {currentTab == 2 &&
            <div className='md:grid grid-cols-3 w-full my-5'>
              <div className='rounded bg-gray-200 p-2 m-2'>
                <p className='text-red-500 font-bold text-md'>ID:</p>
                <div className='flex items-center mt-3'>
                  <img width={'80px'} height={'80px'} style={{ borderRadius: '50%' }} src="https://img.magnific.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" alt="noo" />
                  <div className='ms-5 flex flex-col w-full'>
                    <h4 className='text-blue-400 font-bold text-md'>UserName</h4>
                    <p className='text-xs'>username@gmail.com</p>
                  </div>
                </div>

              </div>
            </div>
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AdminResource
