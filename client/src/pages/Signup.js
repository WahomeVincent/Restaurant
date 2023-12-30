import React, { useState } from 'react'
import registerlogo from '../assets/registerlogo.jpeg'
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { BiShowAlt } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';
import { ImageToBase64 } from '../utility/ImageToBase';

function Signup() {

const navigate = useNavigate();
const [showPassword, setShowPassword] = useState(false)
const [showConfirmPassword, setShowConfirmPassword] = useState(false)
const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: ""
})


function toggleShowPassword() {
    setShowPassword(prevE => !prevE)
}

function toggleShowConfirmPassword() {
    setShowConfirmPassword(prevE => !prevE)
}

function handleInputChange(e){
    const {name, value} = e.target
    setData((prevE) =>{
        return{
            ...prevE,
            [name] : value
        }
    })
}

function handleSubmit (e) {
    e.preventDefault();

    if(data.password === data.confirmPassword){
        alert('Account created successfully added.')
        navigate('/login');
    }else{
        alert('Passwords do not match!')
    }   
}

async function handleProfilePic(e){
    const data = await ImageToBase64(e.target.files[0])

   setData(prevE => {
    return{
      ...prevE,
      image :data
    }
   })
}

  return (
    <div className='w-full h-full' >
        <div className='bg-no-repeat md:bg-cover h-screen object-cover ' style={{backgroundImage: `url(${registerlogo})`}}>
            <div className='flex  items-center justify-center h-screen '>
           
                <form className='flex flex-col gap-1 mt-20 md:w-96 md:p-6 bg-white border shadow-lg drop-shadow-lg rounded-lg p-4 overflow-hidden' onSubmit={handleSubmit}>
                    <div className='w-28 overflow-hidden m-auto rounded-full shadow-lg drop-shadow-lg relative'>
                        <img src={data.image ? data.image : 'https://cdn.pixabay.com/animation/2022/12/05/10/47/10-47-58-930_256.gif' } alt='user' className='rounded-lg' />
                        <label htmlFor='profilePic'>
                        <div className='absolute -bottom-3 left-1 px-8 py-2 h-1/3 bg-yellow-400 w-full'>
                          <p className='text-xs'>Profile</p>
                        </div>
                        <input 
                            type={'file'}
                            id='profilePic'
                            onChange={handleProfilePic}
                            accept='image/*'
                        />
                    </label>
                    </div>
                    <h1 className='text-xl font-semibold mt-10 '>Signup</h1>
                    <h2 className='text-xs mb-5'>Please sign up to continue</h2>

                    <label htmlFor='firstName' className='text-gray-600 text-sm'>First Name</label>
                    <div className='relative'>
                        <input 
                            type='text' 
                            id='firstName' 
                            name='firstName'
                            required 
                            placeholder='Your First name' 
                            className='mt-1 pl-8 py-5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"  rounded-lg w-full h-8'
                            value={data.fistName}
                            onChange={handleInputChange}
                            />
                        <span><FaRegUser className='absolute top-4 left-2 text-gray-600 ' /></span>
                    </div>

                    <label htmlFor='lastName' className='text-gray-600 text-sm'>Last Name</label>
                    <div className='relative'>
                        <input 
                            type='text' 
                            id='lastName' 
                            name='lastName'
                            required 
                            placeholder='Your Last name' 
                            className=' mt-1 pl-8 py-5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"  rounded-lg w-full h-8' 
                            value={data.lastName}
                            onChange={handleInputChange}
                            />
                        <span><FaRegUser className='absolute top-4 left-2 text-gray-600 ' /></span>
                    </div>

                    <label htmlFor='email' className='text-gray-600 text-sm'>Email</label>
                    <div className='relative'>
                        <input 
                            type='email' 
                            id='email' 
                            name='email'
                            required 
                            placeholder='Your Email' 
                            className=' mt-1 pl-8 py-5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"  rounded-lg w-full h-8' 
                            value={data.email}
                            onChange={handleInputChange}
                            />
                        <span><MdOutlineMail className='absolute top-4 left-2 text-gray-600 ' /> </span>
                    </div>

                    <label htmlFor='password' className='text-gray-600 text-sm'>Password</label>
                    <div className='relative '>
                        <input 
                            type={showPassword ? 'text' : 'password'} 
                            id='password' 
                            name='password'
                            required 
                            placeholder='Type a strong Password' 
                            className='text-xs mt-1 pl-8 py-5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"  rounded-lg w-full h-8'
                            value={data.password}
                            onChange={handleInputChange}
                            />
                        <span className='absolute top-4 right-3 flex ' onClick={toggleShowPassword}>{showPassword ? <BiShowAlt /> : <BiHide />} </span>
                    </div>

                    <label htmlFor='confirmPassword' className='text-gray-600 text-sm'>Confirm Password</label>
                    <div className='relative '>
                        <input 
                            type={showConfirmPassword ? 'text' : 'password'} 
                            required 
                            id='confirmPassword' 
                            name='confirmPassword'
                            placeholder='Please confirm your Password' 
                            className='text-xs mt-1 pl-8 py-5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"  rounded-lg w-full h-8'
                            value={data.confirmPassword}
                            onChange={handleInputChange}
                            />
                        <span className='absolute top-4 right-3 flex' onClick={toggleShowConfirmPassword}>{showConfirmPassword ? <BiShowAlt /> : <BiHide /> } </span>
                        
                    </div>

                    <div >
                        <button className='bg-yellow-400 rounded-lg text-lg flex items-center justify-center p-2 my-6 hover:bg-yellow-300 hover:scale-110 cursor-pointer w-full'>Sign Up</button>
                    </div>

                    <div className='flex items-center justify-center text-xs text-gray-700 py-4 mt-2'>
                        <p>Already have an account?
                            <Link to={'/login'} className='underline ml-1 text-blue-400'>Sign In</Link>
                        </p>
                    </div>
                </form>
            
            </div>
        </div>
    </div>
  )
}

export default Signup