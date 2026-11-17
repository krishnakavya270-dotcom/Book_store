import React, { useState } from 'react'
import { FaBars, FaFacebook, FaInstagram, FaTwitter, FaUser, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Header() {
    const [toggle,setToggle] = useState(false)
    return (
        <>
            <div  className='grid grid-cols-3 p-3 bg-[#E8DCC8] text-[#3B2923]'>
                <div className='flex items-center'>
                    <img className='w-12 h-12' src="https://tse2.mm.bing.net/th/id/OIP.gDdy9NZqpXo3S44oMRdtowHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="logo" />
                    <h1 className='text-2xl ms-3 font-bold md:hidden'>Bookstore</h1>
                </div>
                <div className='md:flex justify-center items-center hidden'>
                    <h1 className='text-3xl font-bold'>Bookstore</h1>
                </div>
                <div className='md:flex items-center justify-end hidden gap-3'>
                    <FaInstagram />
                    <FaTwitter />
                    <FaFacebook />
                    <FaWhatsapp />
                    <Link to={'/login'} className='flex justify-center items-center ms-5 border rounded px-3 py-2 hover:bg-black hover:text-white'><FaUser className='me-1' /> Login </Link>
                </div>
            </div>
            <nav className='bg-black w-full text-white md:flex justify-center items-center p-3'>

                <div className='flex justify-between items-center text-2xl md:hidden'>
                    <button onClick={()=>setToggle(!toggle)}><FaBars /></button>
                    <Link to={'/login'} className='flex justify-center items-center ms-5 border rounded px-3 py-2 hover:bg-black hover:text-white'><FaUser className='me-1' /> Login </Link>

                </div>
                <ul className={toggle? 'flex flex-col':'md:flex hidden'}>
                    <li><Link to={'/'} className='md:mx-4 mt-2'>HOME</Link></li>
                    <li><Link to={'/books'} className='md:mx-4 mt-2'>BOOKS</Link></li>
                    <li><Link to={'/contact'} className='md:mx-4 mt-2'>CONTACT</Link></li>
                </ul>
            </nav>
        </>
    )
}
export default Header
