import React from 'react'
import { useSelector } from 'react-redux'
import CartProduct from '../components/CartProduct';

function Cart() {
    const productCartItem = useSelector(state => state.product.cartItem)
    console.log(productCartItem);

  return (
    <div>
        {
            productCartItem.map((item) => {
                return(
                    <CartProduct 
                        key={item.id}
                        id={item.id}
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
  )
}

export default Cart