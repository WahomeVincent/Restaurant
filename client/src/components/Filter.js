import React from 'react'
import { MdLocalDining } from "react-icons/md";

function Filter({category, onClick}) {
  return (
    <div className='flex flex-col items-center' onClick={onClick} >   
            <div className='text-3xl md:text-5xl p-3 bg-yellow-300 rounded-full cursor-pointer'>            
              <button><MdLocalDining /></button>
          </div>
          <p>{category}</p>
    </div>
  )
}

export default Filter