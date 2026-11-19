import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function Auth({ insideRegister }) {
  const[togglePasswordType,setTogglePasswordType] = useState(false)
  return (
    <div className='w-full min-h-screen flex justify-center items-center  bg-[url(/img2.png)] bg-cover bg-center text-white'>
      <div className='p-10'>
        <h1 className=' font-bold text-3xl text-center'>BOOK STORE</h1>
        <div style={{ width: '400px' }} className='bg-black text-white p-5 flex justify-center items-center flex-col my-5'>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%' }} className='border mb-5 flex justify-center items-center'> <FaUser className='text-3xl' />
          </div>
          <h1 className='text-2xl'>{insideRegister ? "Register" : "Login"}</h1>
          <form>
            {/* username */}

            {
              insideRegister &&
              <input type="text" placeholder='username' className='bg-white text-black p-2 my-5 w-full rounded' />
            }
            {/* Email */}
            <input type="email" placeholder='E mail' className='bg-white text-black p-2 my-5 w-full rounded' />

            {/* password */}
            <div className='flex items-center'>
              <input type={ togglePasswordType? "text": "password"} placeholder='password' className='bg-white text-black p-2 my-5 w-full rounded' />

              {
                togglePasswordType ? 
                 <FaEyeSlash onClick={()=>setTogglePasswordType(! togglePasswordType)} className='text-gray-500 cursor-pointer  ' style={{marginLeft:'-25px',marginTop:'-5px'}}/>

                :
                  <FaEye onClick={()=>setTogglePasswordType(! togglePasswordType)} className='text-gray-500 cursor-pointer  ' style={{marginLeft:'-25px',marginTop:'-5px'}}/>

              }
            </div>

            {/* forgot password */}
            <div className='flex justify-between gap-5'>
              <p className='text-xs text-orange-300'> * Never Share your password with others</p>
              { !insideRegister &&
                <button className='text-xs underline'>Forgot Password</button>
              }
            </div>

            {/* login or register button */}
            <div className='my-5 text-center'>
              {
                insideRegister ?
                <button className='bg-green-500 w-full p-2'>Register</button>
                :
                <button className='bg-green-500 w-full p-2'>Login</button>
              }

            </div>

            {/* google authentication */}
            {
              !insideRegister &&
              <div className='text-center my-5'>
                <p>--------------------------OR------------------------</p>
                <div className='flex justify-center items-center w-full m-2'>Google Authentication</div>
              </div>
            }

            <div className='text-center'>
              {
                insideRegister ?
                <p className='text-blue-500'>Existing User? <Link to={'/login'} className='ms-4 underline'>Login</Link> </p>
                :
                <p className='text-blue-500'>New User? <Link to={'/register'} className='ms-4 underline'>Register</Link> </p>
              }

            </div>

          </form>

        </div>
      </div>
    </div>
  )
}

export default Auth
