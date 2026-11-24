import React from 'react'
import Footer from '../../Components/Footer'
import AdminHeader from '../Components/AdminHeader'
import AdminSidebar from '../Components/AdminSidebar'

function AdminDashboard() {
  return (
   <>
   <AdminHeader/>
      <div className='md:grid grid-cols-5'>
        {/* 1 section 1grid*/}
        <div className='col-span-1'>
          <AdminSidebar/>

        </div>
        {/* 2 section 4grid */}
        <div className='col-span-4'>
          Admin Dashboard

        </div>
        
      </div>
      <Footer/>
   </>
  )
}

export default AdminDashboard
