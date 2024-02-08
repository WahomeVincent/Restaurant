import React from 'react'
import { Link } from 'react-router-dom'
import { addCartItem } from '../redux/productSlice'
import { useDispatch } from 'react-redux'

function CardFeature({image, name, category, price, id}) {

  const dispatch = useDispatch()

  function handleAddToCart() {
      dispatch(addCartItem({
        _id : id,
        name : name,
        price : price,
        category : category,
        image : image
      }))
  }
  return (
    <div>
        <div className='bg-white hover:shadow-lg drop-shadow-lg px-2 py-2 flex flex-col gap-2 w-48'>
              <Link to={`/menu/${id}`} onClick={() => window.scrollTo({top:'0', behavior:'smooth'})}>

                  <div className='h-28  '>
                      <img src={image} alt='' className='h-full w-full shadow-lg drop-shadow-lg'/>
                  </div>
                  <h2 className=' font-semibold pt-2 whitespace-nowrap overflow-hidden'>{name}</h2>
                  <p className=' text-slate-400'>{category}</p>
                  <p className=''><span className='text-blue-700'>Kes</span> <span>{price}</span></p>
              </Link> 

                  <div className='flex items-center justify-center'>
                      <button className='bg-yellow-400 hover:bg-yellow-500 rounded p-2 w-full' onClick={handleAddToCart}>Add to Cart</button>
                  </div>
        </div>
      
    </div>
  )
}

export default CardFeature