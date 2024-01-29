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
                    const total = action.payload.price
                    state.cartItem = [...state.cartItem, {...action.payload, quantity : 1, total : total}]
        },
        deleteCartItem : (state, action) => {
                console.log(action.payload);
                toast('Item deleted')
                const index = state.cartItem.findIndex(item => item._id === action.payload)
                state.cartItem.splice(index, 1)
        },
        increaseQuantity : (state, action) => {
                const index = state.cartItem.findIndex(item => item._id === action.payload)
                let quantity = state.cartItem[index].quantity
                state.cartItem[index].quantity = ++quantity
        }, 
        decreaseQuantity : (state, action) => {
            const index = state.cartItem.findIndex(item => item._id === action.payload)
            let quantity = state.cartItem[index].quantity
            state.cartItem[index].quantity = --quantity
        }
    }
})

export const {setDataProduct, addCartItem, deleteCartItem, increaseQuantity, decreaseQuantity} = productSlice.actions

export default productSlice.reducer