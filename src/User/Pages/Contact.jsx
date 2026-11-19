import React from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import { FaLocationPin } from 'react-icons/fa6'
import { FaEnvelope, FaPaperPlane, FaPhone } from 'react-icons/fa'

function Contact() {
  return (
    <>
      <Header />
      <div className='md:px-20 my-5 p-5'>
        <h1 className='text-center font-bold text-3xl my-5'>Contact</h1>
        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam molestiae facilis libero. Eum sequi eius quia, impedit cum ducimus! Autem sapiente quasi eos blanditiis fugit recusandae suscipit ipsum quia magnam! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit consectetur porro, rerum iure labore consequatur quae tempore praesentium nam. Numquam deleniti dolorem quam quod ducimus voluptatibus quidem voluptate fugiat unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem temporibus quibusdam molestias incidunt corrupti voluptatem quos, illum magni distinctio cum at quasi, aliquid nihil, voluptatum quidem labore consequatur quae. Earum consequuntur, quaerat quidem voluptatem ratione labore a ipsam, maxime quis dolorem enim sit saepe sequi numquam expedita delectus suscipit minus sed. Reprehenderit ex quibusdam sint minus ratione. Culpa, qui?</p>
        {/* grid */}
        <div className='md:flex flex-cols items-start gap-5  mt-5 p-5 md:px-40 md:mt-0'>
          {/* location */}
          <div className='flex items-center'>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%' }} className='flex items-center justify-center bg-gray-300'>
              <FaLocationPin />
            </div>
            <p className='ms-5'>123 Main Street , Apt 4B , Anytown ,CA 963214</p>
          </div>
          {/* number */}
          <div className='flex items-center'>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%' }} className='flex items-center justify-center bg-gray-300'>
              <FaPhone />
            </div>
            <p className='ms-5  '>+963258414</p>
          </div>

          {/* email */}
          <div className='flex items-center'>
            <div style={{ width: '50px', height: '50px', borderRadius: '50%' }} className='flex items-center justify-center bg-gray-300'>
              <FaEnvelope />
            </div>
            <p className='ms-5 '>bookstore@gmail.com</p>
          </div>
        </div>

        {/* message and map */}
        <div className='md:grid grid-cols-2 gap-10 my-5 p-5 md:px-40'>
          {/* message */}
          <div className='bg-gray-200 text-center p-5'>
            <h1 className='font-semi-bold text-2xl'>Send Us Message !</h1>
            <form>
              <div className='mb-5 mt-10'>
                <input type="text" placeholder='Name' className='bg-white w-full p-2' />
              </div>

              <div className='mb-5 mt-5'>
                <input type="email" placeholder='Email' className='bg-white w-full p-2' />
              </div>

              <div className='mb-5 mt-5'>
                <textarea type="text" placeholder='Message' className='bg-white w-full p-2' />
              </div>

              <div className='my-5'>
                <button className='bg-black text-white w-full p-2 rounded flex justify-center items-center'>Submit <FaPaperPlane className='ms-2' /></button>
              </div>
            </form>
          </div>
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.881001640962!2d76.52478107766709!3d9.605513865935514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b062b06f7f11031%3A0x6bc6c5d53ddba82d!2sAithousa!5e0!3m2!1sen!2sin!4v1795065845116!5m2!1sen!2sin" width="100%" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact
