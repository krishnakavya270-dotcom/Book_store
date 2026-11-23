import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import { IoCheckmarkCircleSharp } from 'react-icons/io5'
import Edit from '../Components/Edit'
import UploadBooks from '../Components/UploadBooks'

function Profile() {
  const [currentTab,setCurrentTab] = useState(1)
  return (
    <>
      <Header />
      <div className='bg-black' style={{ height: '200px' }}>
      </div>
      <div style={{ height: '230px', width: '230px', borderRadius: '50%', marginLeft: '75px', marginTop: '-110px' }} className='bg-white p-3'>
        <img style={{ height: '210px', width: '210px', borderRadius: '50%' }} src="https://img.magnific.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" alt="" />
      </div>

      <div className='flex justify-between px-20 mt-5'>
        <div className='flex items-center'>
          <h1 className='font-bold text-2xl md:text-3xl'>User Name</h1>
          <IoCheckmarkCircleSharp className='text-blue-500 text-xl ms-3' />
        </div>
        <Edit/>
      </div>
      <p className='text-xl font-bold px-20 mt-5'>Bio</p>
      <p className='justify-text md:px-20 px-5 my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi deserunt animi dicta unde quod fugit temporibus dolore officia. Aperiam error eligendi, omnis recusandae dicta necessitatibus obcaecati vel eius ipsum? Fugiat?</p>
      <div className='flex justify-center items-center my-8 font-bold text-lg'>
        <p onClick={()=>setCurrentTab(1)} className={currentTab==1 ?'p-4 border-gray-300 border-l border-t border-r cursor-pointer rounded-xl':'p-4 border-gray-300 border-b cursor-pointer rounded'}>Upload Book</p>
        <p onClick={()=>setCurrentTab(2)} className={currentTab==2 ?'p-4 border-gray-300 border-l border-t border-r cursor-pointer rounded-xl':'p-4 border-gray-300 border-b cursor-pointer rounded'}>Upload Book Status</p>
        <p onClick={()=>setCurrentTab(3)} className={currentTab==3 ?'p-4 border-gray-300 border-l border-t border-r cursor-pointer rounded-xl':'p-4 border-gray-300 border-b cursor-pointer rounded'}>Purchase History</p>
      </div>
      {currentTab==1 && <div><UploadBooks/></div>}
      {currentTab==2 && <div>upload book status</div>}
      {currentTab==3 && <div>purchase history</div>}
      <Footer />
    </>
  )
}

export default Profile
