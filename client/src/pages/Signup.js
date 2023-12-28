import React, { useState } from 'react'
import registerlogo from '../assets/registerlogo.jpeg'
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { BiShowAlt } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import { Link } from 'react-router-dom';

function Signup() {
const [showPassword, setShowPassword] = useState(false)
const [showConfirmPassword, setShowConfirmPassword] = useState(false)

function toggleShowPassword() {
    setShowPassword(prevE => !prevE)
}

function toggleShowConfirmPassword() {
    setShowConfirmPassword(prevE => !prevE)
}

  return (
    <div className='' >
        <div className='flex  items-center justify-center h-screen '>
           
                <form className='flex flex-col gap-1 md:w-96 bg-white border shadow-lg drop-shadow-lg rounded-lg p-2'>
                    <h1 className='text-xl font-semibold'>Signup</h1>
                    <h2 className='text-xs'>Please sign up to continue</h2>

                    <label htmlFor='firstname' className='text-gray-600 text-sm'>First Name</label>
                    <div className='relative'>
                        <input type='text' id='firstname' placeholder='Your First name' className='mt-1 pl-8 py-5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"  rounded-lg w-full h-8'/>
                        <span><FaRegUser className='absolute top-4 left-2 text-gray-600 ' /></span>
                    </div>

                    <label htmlFor='lastname' className='text-gray-600 text-sm'>Last Name</label>
                    <div className='relative'>
                        <input type='text' id='lastname' placeholder='Your Last name' className=' mt-1 pl-8 py-5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"  rounded-lg w-full h-8' />
                        <span><FaRegUser className='absolute top-4 left-2 text-gray-600 ' /></span>
                    </div>

                    <label htmlFor='email' className='text-gray-600 text-sm'>Email</label>
                    <div className='relative'>
                        <input type='email' id='email' placeholder='Your Email' className=' mt-1 pl-8 py-5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"  rounded-lg w-full h-8' />
                        <span><MdOutlineMail className='absolute top-4 left-2 text-gray-600 ' /> </span>
                    </div>

                    <label htmlFor='password' className='text-gray-600 text-sm'>Password</label>
                    <div className='relative '>
                        <input type={showPassword ? 'text' : 'password'} id='password' placeholder='Type a strong Password' className='text-xs mt-1 pl-8 py-5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"  rounded-lg w-full h-8'/>
                        <span className='absolute top-4 right-3 flex ' onClick={toggleShowPassword}>{showPassword ? <BiShowAlt /> : <BiHide />} </span>
                    </div>

                    <label htmlFor='confirmpassword' className='text-gray-600 text-sm'>Confirm Password</label>
                    <div className='relative '>
                        <input type={showConfirmPassword ? 'text' : 'password'} id='confirmpassword' placeholder='Please confirm your Password' className='text-xs mt-1 pl-8 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"  rounded-lg w-full h-8'/>
                        <span className='absolute top-4 right-3 flex' onClick={toggleShowConfirmPassword}>{showConfirmPassword ? <BiShowAlt /> : <BiHide /> } </span>
                        
                    </div>

                    <div className='bg-yellow-400 rounded-lg text-lg flex items-center justify-center p-2 '>
                    <button className=''>Sign Up</button>
                    </div>

                    <div className='flex items-center justify-center text-xs text-gray-700 py-4 mt-10'>
                        <p>Already have an account?
                            <Link to={'signin'} className='underline ml-1 text-blue-400'>Sign In</Link>
                        </p>
                    </div>
                </form>
            
        </div>
    </div>
  )
}

export default Signup