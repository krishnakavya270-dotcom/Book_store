import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Books() {
  const [toggle,setToggle] = useState(false)
  return (
    <>
      <Header />
      <div className='flex flex-col justify-center items-center my-5'>
        <h1 className='font-bold text-3xl my-5'>All Books</h1>
        <div className='my-5'>
          <input type="text" className='border border-gray-300 w-100 p-2' placeholder='search by book title' />
          <button className='bg-blue-800 text-white p-2 ms-2 rounded'>Search</button>
        </div>
      </div>

      {/* grid:filter */}
      <div className='md:grid grid-cols-4 p-5 md:px-40 mb-10'>

        {/* filter */}
        <div className='col-span-1'>
          <div className='flex justify-between'>
            <h1 className='font-bold text-2xl'>Filter</h1>
            <button onClick={()=>setToggle(!toggle)} className='text-2xl md:hidden'> <FaBars /> </button>
          </div>
          {/* filter category */}
          <div className={toggle? 'block':'hidden md:block'}>
            <div className='mt-3'>
              <input name='filtering' type="radio" id='no-filter' />
              <label className='ms-3' htmlFor="no-filter">All</label>
            </div>

             <div className='mt-3'>
              <input name='filtering' type="radio" id='filter' />
              <label className='ms-3' htmlFor="filter">Category</label>
            </div>
          </div>
        </div>

        {/* book card */}

        <div className='col-span-3'>
          <div className='md:grid grid-cols-4 mt-5'>
            <div className='shadow rounded p-3 m-4'>
              <img width={'100%'} height={'300px'} src="https://tse2.mm.bing.net/th/id/OIP.JYkV2S6z_qLRzO44DW7q7AHaLG?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="book card" />
              <div className='flex flex-col justify-center items-center mt-4'>
                <h2 className='text-blue-700 font-bold text-xl'>Author</h2>
                <h3 className='text-lg'>Title</h3>
                <Link to={'/books/:id'} className='bg-blue-800 text-white p-2 rounded mt-2 font-bold'>View Book</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </>
  )
}

export default Books
