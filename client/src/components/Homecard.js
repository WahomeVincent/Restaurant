import React from 'react'
import { Link } from 'react-router-dom'

function Homecard({name, image, category, price, loading, id}) {
  return (
    <div className='bg-white shadow-md p-2 rounded w-44 min-h-[150px] mt-5 md:mt-0'>
      <Link to={`/menu/${id}`} onClick={() => window.scrollTo({top:'0', behavior:'smooth'})}>

            {
              name ? <>
              <div className='w-40 h-32 '>
                  <img src={image} alt='' className='w-full h-full'/>
              </div>
              <h2 className='text-center font-semibold pt-2'>{name}</h2>
              <p className='text-center text-slate-400'>{category}</p>
              <p className='text-center'><span className='text-blue-700'>Kes</span> <span>{price}</span></p>
      
              </>
              :
              <div className='flex justify-center items-center h-full'>
                  <p>{loading} </p>
              </div>
            }
      </Link>
       
    </div>
  )
}

export default Homecard