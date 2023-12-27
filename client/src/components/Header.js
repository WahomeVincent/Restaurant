import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header fixed w-full shadow h-16 px-2 md:px-4'>
        {/* desktop */}
        <div className='flex items-center h-full'>
            <Link to={''}>
                <div className='h-12'>
                    <img src={logo} alt='' className='h-full' />
                </div>
            </Link>
        </div>
        {/* mobile */}
    </div>
  )
}

export default Header