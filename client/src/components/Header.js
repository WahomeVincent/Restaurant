import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { FaUser } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6"

function Header() {

const [showMenu, setShowMenu] = useState(false);

function toggleMenu() {
    setShowMenu(prevE => !prevE)
    
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
                    <div className='border-2 border-solid border-slate-400 rounded-lg p-1 cursor-pointer'>
                    <FaUser id='user' />
                    </div>
                    { showMenu && 
                         <div className='absolute right-2 py-4 px-2 bg-white shadow drop-shadow-md my-2' >
                         <Link to={'newproduct'} className='whitespace-nowrap cursor-pointer'>New Product</Link>
                         <hr></hr>
                         <Link to={'login'} className='whitespace-nowrap cursor-pointer'>Login</Link>
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