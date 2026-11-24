import React from 'react'
import { Link } from 'react-router-dom'
Link

function PageNotFound() {
  return (
    <div className='min-h-screen flex justify-center items-center flex-col'>
      <img src="https://i.pinimg.com/originals/3c/df/50/3cdf50bf2536bb0a51cb28e1a291e670.gif" alt="pagenotfound" />
      <Link to={'/'} className='bg-black text-white mt-3 px-5 py-2 rounded '>Home </Link>
    </div>
  )
}

export default PageNotFound
