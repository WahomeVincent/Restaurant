import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Link, useSearchParams } from 'react-router-dom'
import { FaUser } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6"
import { useDispatch, useSelector } from 'react-redux'
import { logoutRedux } from '../redux/userSlice';
import { toast } from "react-hot-toast"

function Header() {

const [showMenu, setShowMenu] = useState(false);
const userData = useSelector((state) => state.user)

const dispatch = useDispatch()

function toggleMenu() {
    setShowMenu(prevE => !prevE)
    
}

function handleLogout() {
    dispatch(logoutRedux())
    toast('LogOut Successfull')
}

  return (
    <div className='header bg-white fixed w-full shadow h-16 px-2 md:px-4 z-50'>
        {/* desktop */}
        <div className='flex items-center justify-between h-full'>
            <Link to={''}>
                <div className='h-10'>
                    <img src={logo} alt='' className='h-full' />
                </div>
            </Link>

            <div className='flex items-center gap-4 md:gap-8'>
                <nav className='flex gap-4 md:gap-7 text-base md:text-lg'>
                    <Link to={''}>Home</Link> 
                    <Link to={'menu'}>Menu</Link>
                    <Link to={'about'}>About</Link>
                    <Link to={'contact'}>Contact</Link>
                </nav>
                <div className='text-2xl text-slate-600 relative'>
                    <FaCartShopping />
                    <div className='absolute -top-2 -right-2 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-xs text-center'>
                        0
                    </div>
                </div>
                <div className='text-lg text-slate-600'  onClick={toggleMenu}>
                    <div className='border-2 border-solid border-slate-300 rounded-full overflow-hidden cursor-pointer w-10 h-10 text-2xl flex items-center justify-center'>
                        {
                            userData.image ? <img src={userData.image} className='w-full h-full' /> : <FaUser id='user' className='' />
                        }
                        
                    </div>
                    { showMenu && 
                         <div className='absolute right-2 py-4 px-2 bg-white shadow drop-shadow-md my-2' >
                         <Link to={'newproduct'} className='whitespace-nowrap cursor-pointer'>New Product</Link>
                         <hr></hr>
                         {
                                userData.email ? <p className='whitespace-nowrap cursor-pointer' onClick={handleLogout}>Logout</p> : <Link to={'login'} className='whitespace-nowrap cursor-pointer'>Login</Link>
                         }
                     </div>
                    }
                   
                </div>
            </div>
        </div>
        {/* mobile */}
    </div>
  )
}

export default Header