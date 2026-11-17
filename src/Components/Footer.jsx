import React from 'react'
import { FaArrowRight, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

function Footer() {
  return (
    <>
    <div className='md:grid grid-cols-3 md:gap-10 bg-black text-white p-10'>
      
      <div>
        <h1 className='font-bold'>About US</h1>
        <p className='mt-5 text-justify'>We Believe Books Are More Than Just Pages-they are windows into new worlds , teachers of wisdom , and companions for life.Our Journey began with a passion for storytelling and a mission to make reading accessible,enjoyable ,and inspiring for everyone.  </p>
      </div>

      <div className='flex flex-col md:mt-0 mt-5 '>
        <h2  className='font-bold'>News letter</h2>
        <p className='my-5'>Stay Updated with our latest trends</p>
        <div className='flex'>
          <input type="text" placeholder='E Mail' className='border bg-white text-black p-2' />
          <button className='bg-yellow-500 p-2'><FaArrowRight/></button>
        </div>
      </div>

        <div className='flex flex-col md:mt-0 mt-5 '>
        <h2  className='font-bold'>Follow US</h2>
        <p className='my-5'>Let Us To Be Social</p>
        <div className='flex'>
          <FaFacebook/>
          <FaInstagram className='mx-5'/>
          <FaXTwitter/>
          <FaEnvelope className='mx-5' />
        </div>
      </div>

    </div>
    </>
  )
}

export default Footer
