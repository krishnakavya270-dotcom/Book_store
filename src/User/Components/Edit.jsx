import React, { useState } from 'react'
import { FaPen, FaUserEdit } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

function Edit() {
  const [offCanvas,setOffCanvas] = useState(false)
  return (
    <div>
        {/* Button */}
      <button onClick={()=>setOffCanvas(true)} className='bg-black text-white p-2 rounded font-bold flex items-center border hover:bg-white hover:text-black cursor-pointer justify-center '><FaUserEdit className='text-2xl me-2'/> Edit</button>
      {/* off Canvas */}
     { offCanvas &&
     <div>
        <div className='bg-gray-500 inset-0 fixed w-full h-full'></div>
        <div className='bg-white h-full z-50 fixed w-90 top-0 left-0'>
          {/* Head */}
          <div className='flex justify-between bg-black text-white p-3 text-2xl'>
            <h1>Update User Profile</h1>
            <FaX onClick={()=>setOffCanvas(false)}/>
          </div>
          {/* body */}
          <div className='flex justify-center items-center my-5 flex-col'>
            <label htmlFor="userprofile">
              <input type="file" id='userprofile' hidden/>
              <img style={{height:'100px',width:'100px',borderRadius:'50%'}} src="https://img.magnific.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" alt="user" />
              <button style={{marginLeft:'70px',marginTop:'-35px'}} className='bg-black text-white px-2 py-2 rounded z-52 fixed'><FaPen/></button>
            </label>
            {/* username */}
            <div className='mt-10 mb-3 w-full px-5'>
              <input type="text" placeholder='Username' className='w-full bg-gray-200 rounded p-2' />
            </div>
            {/* password */}
             <div className='mb-3 w-full px-5'>
              <input type="text" placeholder='New password' className='w-full bg-gray-200 rounded p-2' />
            </div>
            {/* new password */}
             <div className=' mb-3 w-full px-5'>
              <input type="text" placeholder='confirm passsword' className='w-full bg-gray-200 rounded p-2' />
            </div>
            {/* bio */}
             <div className=' mb-3 w-full px-5'>
              <input type="text" placeholder='Bio' className='w-full bg-gray-200 rounded p-2' />
            </div>
            {/* reset and update */}
            <div className='flex justify-end w-full mt-5 px-5 w-full'>
              <button className='bg-yellow-600 text-white px-5 py-1 font-bold rounded'>RESET</button>
               <button className='bg-green-600 text-white px-5 py-1 font-bold rounded ms-3'>UPDATE</button>
  
            </div>
          </div>
        </div>
     </div>
      }
    </div>
  )
}

export default Edit
