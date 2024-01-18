import React from 'react'

function Homecard({name, image, category, price}) {
  return (
    <div className='bg-white shadow-md p-2 '>
        <div className='w-40 h-40 '>
            <img src={image} alt='' className='w-full h-full'/>
        </div>
        <h2 className='text-center font-semibold pt-2'>{name}</h2>
        <p className='text-center text-slate-400'>{category}</p>
        <p className='text-center'><span className='text-blue-700'>Kes</span> <span>{price}</span></p>
    </div>
  )
}

export default Homecard