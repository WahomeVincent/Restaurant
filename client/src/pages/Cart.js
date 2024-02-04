import React from 'react'
import { useSelector } from 'react-redux'
import CartProduct from '../components/CartProduct';
import cart from  '../assets/cart.png'
import { Link } from 'react-router-dom';

function Cart() {
    const productCartItem = useSelector(state => state.product.cartItem)

    const totalPrice = productCartItem.reduce((acc, curr) => acc + parseInt(curr.total),0)
    const totalQuantity = productCartItem.reduce((acc, curr) => acc + parseInt(curr.quantity),0)


  return (
    <>  
        <div className='mt-5 mx-5'>
            <h1 className='text-2xl'>Your cart Items</h1>
        </div>
        {
            productCartItem[0] ?
            <div className='m-2 flex gap-6'>
                
                <div className='md:w-1/2'>

                    {
                        productCartItem.map((item) => {
                            return(
                                <CartProduct 
                                    key={item.id}
                                    id={item._id}
                                    image={item.image}
                                    name={item.name}
                                    price={item.price}
                                    category={item.category}
                                    quantity={item.quantity}
                                    total={item.total}
                                />
                            )
                        })
                    }
                </div>

                <div className='w-1/2 p-2 my-6 mx-10'>
                    <h1 className='bg-blue-500 text-white p-4 text-lg'>Summary</h1>
                    <div className='py-2 border px-2'>
                        <h2 className='py-2 border flex justify-between p-4'>Total quantity: <span>{totalQuantity}</span></h2>
                        <h2 className='py-2 border flex justify-between p-4'>Total price: <span>KES: {totalPrice}</span></h2>
                    </div>
                    <div className='bg-red-500 text-white flex justify-center text-xl p-3 rounded hover:bg-red-600'>
                        <button>Payment</button>
                    </div>
                </div>
                
            </div> : 
            <div className='m-2 mt-32 flex flex-col items-center gap-4'>
                <h1 className='text-xl md:text-2xl font-bold'>Sorry! No Items added in the cart.</h1>
                <img src={cart} alt='' className='m-auto w-1/2 md:w-1/4'/>
                <Link to={'/'} className='bg-yellow-300 p-2 rounded w-1/2 md:w-1/4 flex justify-center'>
                    Back to Home
                </Link>
            </div>
        }
    </>
  )
}

export default Cart