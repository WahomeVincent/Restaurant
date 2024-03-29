import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    productList : [],
    cartItem : []
}

export const productSlice = createSlice({
    name : 'product',
    initialState,
    reducers : {
        setDataProduct : (state, action) => {
                state.productList = [...action.payload]
        },
        addCartItem : (state, action) => {

                    const check = state.cartItem.some(item => item._id === action.payload._id)
                    console.log(check);
                    if (!check) {
                        const total = action.payload.price
                        const index = state.cartItem.findIndex(item => item._id === action.payload)
                        state.cartItem = [...state.cartItem, {...action.payload, quantity : 1, total : total}]
                        toast('Item added to cart.')
                    }else{
                        toast('Already added to cart.')
                    }
                    
                },
        deleteCartItem : (state, action) => {
                console.log(action.payload);
                toast('Item removed from cart.')
                const index = state.cartItem.findIndex(item => item._id === action.payload)
                state.cartItem.splice(index, 1)
        },
        increaseQuantity : (state, action) => {
                const index = state.cartItem.findIndex(item => item._id === action.payload)
                let quantity = state.cartItem[index].quantity
                let quantityIncrease = ++quantity
                state.cartItem[index].quantity = quantityIncrease

                const price = state.cartItem[index].price
                let totalPrice = price * quantityIncrease

                state.cartItem[index].total = totalPrice 

        }, 
        decreaseQuantity : (state, action) => {
            const index = state.cartItem.findIndex(item => item._id === action.payload)
            let quantity = state.cartItem[index].quantity

            if (quantity > 1) {
                let quantityDecrease = --quantity

                state.cartItem[index].quantity = quantityDecrease


                const price = state.cartItem[index].price
                let totalPrice = price * quantityDecrease
                state.cartItem[index].total = totalPrice 
            }

           

        }
    }
})

export const {setDataProduct, addCartItem, deleteCartItem, increaseQuantity, decreaseQuantity} = productSlice.actions

export default productSlice.reducer