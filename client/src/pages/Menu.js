import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import Allproducts from '../components/Allproducts';
import { addCartItem } from '../redux/productSlice';

function Menu(id) {
  const {filterBy} = useParams()
  const productData = useSelector((state) => state.product.productList)
  const productFilter = productData.filter(item => item._id === filterBy)[0]

  const dispatch = useDispatch()

  function handleAddToCart(id) {
      dispatch(addCartItem(productData))
  }

  return (
    <div className='bg-slate-100  md:h-full'>
        <div className='bg-white m-4 p-2 shadow-lg drop-shadow-lg md:flex md:gap-4 '>
            <img src={productFilter.image} alt='' className='md:w-72 hover:scale-105 shadow-lg p-2 border border-slate-200'/>
            <div className='md:flex md:flex-col md:gap-4'>
                <div className='flex gap-4 font-semibold text-2xl mx-14 my-2 md:mx-auto md:text-3xl'>
                    <p>{productFilter.name}</p>
                    <p className='text-slate-500'>-{productFilter.category}-</p>
                </div>
                    <p className='text-blue-400 text-xl md:text-2xl my-2'>Kes <span className='text-black'>{productFilter.price}</span> </p>
                    <p className='font-semibold underline my-1'>Description</p>
                    <p className='md:text-xl'>{productFilter.description}</p>
                <div className='flex items-center justify-center my-2 md:text-xl '>
                    <button className='bg-yellow-400 p-2 m-2 rounded hover:bg-yellow-500 mx-6 md:mx-12'>Buy now</button>
                    <button onClick={handleAddToCart} className='bg-yellow-400 p-2 m-2 rounded hover:bg-yellow-500 mx-6 md:mx-12'>Add to Cart</button>
                </div>
            </div>
        </div>

        <Allproducts heading='Related Products' />
    </div>
  )
}

export default Menu