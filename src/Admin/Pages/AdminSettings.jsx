import React from 'react'
import Footer from '../../Components/Footer'
import AdminHeader from '../Components/AdminHeader'
import AdminSidebar from '../Components/AdminSidebar'
import { FaPen } from 'react-icons/fa'

function AdminSettings() {
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
          <h1 className='text-3xl font-bold text-center mb-10'>SETTINGS</h1>
          <div className='md:grid grid-cols-2 items-center'>
            {/* 1 section */}
            <div>
              <h1 className='font-bold text-2xl mb-8'>Welcome, Admin 👋</h1>
              <p className='text-justify'>This is your personal administration space where you can manage your account details, system preferences, and platform roles with ease. From here, you can update essential information such as your username, password, contact details, and notification preferences — ensuring your access remains secure and personalized.</p>
              <h4 className='my-5 font-bold text-large'>🔧 What You Can Manage in This Section:</h4>
              <ul>
                <li>✏️ Update personal details (name, email, role, profile picture)</li>
                <li>🔐 Change or reset your password</li>
                <li>📢 Configure notification and alert preferences</li>
                <li>👥 Manage permissions based on assigned access level</li>
                <li>🧩 Customize dashboard visibility and layout</li>
              </ul>
              <p className='text-justify my-10'>Your profile settings help ensure your administrative tools work the way you need them to — securely, efficiently, and with complete control. Thank you for keeping the platform organized and running smoothly. Continue managing, updating, and improving the system — one step at a time. 🚀📚</p>



            </div>
            {/* 2 section */}
            <div className='flex justify-center items-center m-10 flex-col bg-blue-100  my-5 '>
              <label htmlFor="userprofile">
                <input type="file" id='userprofile' hidden />
                <img style={{ height: '100px', width: '100px', borderRadius: '50%' }} src="https://img.magnific.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" alt="user" />
                <button style={{ marginLeft: '70px', marginTop: '-35px' }} className='bg-black text-white px-2 py-2 rounded'><FaPen /></button>
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
              {/* reset and update */}
              <div className='flex justify-end w-full mt-5 px-5 w-full'>
                <button className='bg-yellow-600 text-white px-5 py-1 font-bold rounded'>RESET</button>
                <button className='bg-green-600 text-white px-5 py-1 font-bold rounded ms-3'>UPDATE</button>

              </div>
            </div>

          </div>

        </div>

      </div>
      <Footer />
    </>
  )
}

export default AdminSettings
