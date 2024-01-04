import React, { useState } from 'react'
import { MdOutlineMail } from "react-icons/md";
import { BiShowAlt } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { ImageToBase64 } from '../utility/ImageToBase';
import toast, { Toaster } from 'react-hot-toast';


function Login() {

  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: '',
    image: ''
  })

  function toggleShowPassword() {
    setShowPassword(prevE => !prevE)
  }

  function handleInputChange(e){
    const {name, value} = e.target;
    setData((prevE) => {
      return {
        ...prevE,
        [name] : value
      }
    })
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const {email, password} = data
    if(email && password){
      alert('Login successfull')
      const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/login`, {
        method : "POST",
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify(data)
    })

    const dataRes = await fetchData.json()
    console.log(dataRes);
    toast(dataRes.message)
    }else{
      alert('Please Enter required fields')
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
    <div>
        <div className='flex items-center justify-center h-screen'>
            <form className='flex flex-col bg-white p-2 gap-2 rounded-lg shadow-lg drop-shadow-lg md:w-96 md:p-4' onSubmit={handleSubmit}>
                <div className='w-28 overflow-hidden m-auto rounded-full shadow-lg drop-shadow-lg relative'>
                        <img src={data.image ? data.image : 'https://cdn.pixabay.com/animation/2022/12/05/10/47/10-47-58-930_256.gif' } alt='user' className='' />
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
                <h1 className='text-xl font-semibold mt-10'>Login</h1>
                <h2 className='text-xs mb-5'>Please login to continue</h2>
                <label htmlFor='email'>Email</label>
                <div className='relative'>
                    <input 
                        id='email'
                        type='email'
                        name='email'
                        placeholder='Email'
                        required
                        className='mt-1 pl-8 py-5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"  rounded-lg w-full h-8'
                        value={data.email}
                        onChange={handleInputChange}
                    />
                    <span className='absolute top-4 left-2 flex'><MdOutlineMail /></span>
                </div>

                <label htmlFor='password'>Password</label>
                <div className='relative'>
                    <input 
                        id='password'
                        type={showPassword ? 'text' : 'password'}
                        name='password'
                        placeholder='Password'
                        required
                        className='mt-1 pl-8 py-5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"  rounded-lg w-full h-8'
                        value={data.password}
                        onChange={handleInputChange}

                    />
                    <span className='absolute top-4 right-3 flex' onClick={toggleShowPassword}>{showPassword ? <BiShowAlt /> : <BiHide /> }</span>
                </div>

                <div >
                    <button className='bg-yellow-400 rounded-lg text-lg flex items-center justify-center p-2 my-6 hover:bg-yellow-300 hover:scale-105 cursor-pointer w-full'>
                        Login
                    </button>
                </div>

                <div className='flex items-center justify-center text-xs text-gray-700 py-4 mt-2'>
                        <p>Don't have an account?
                            <Link to={'/signup'} className='underline ml-1 text-blue-400'>Sign Up</Link>
                        </p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login