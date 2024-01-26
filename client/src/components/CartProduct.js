import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

function CartProduct({id, name, image, category, price, quantity, total}) {
  return (
    <div>
        <div className='flex m-2 p-2 gap-4 h-48 bg-white shadow-xl drop-shadow md:max-w-2xl'>
            <img src={image} alt='' className='w-48 border border-slate-300 p-1 '/>
            <div className='flex flex-col gap-2 w-full py-2'>
                <h1 className='font-bold text-xl'>{name}</h1>
                <h2 className='text-slate-500'>{category}</h2>
                <h3>Kes {price}</h3>

                <div className='md:flex items-center justify-between '>
                    <div className='flex gap-4 my-2'>
                        <button className='bg-yellow-300 p-1 rounded'><FaPlus /></button>
                        <p>{quantity}</p>
                        <button className='bg-yellow-300 p-1 rounded'><FaMinus /></button>
                    </div>

                    <div className='flex gap-2'>
                        <p className='text-xl font-bold'>Total:</p>
                        <p className='text-xl'>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartProduct