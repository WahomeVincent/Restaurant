import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const productSlice = createSlice({
    name : 'product',
    initialState,
    reducers : {
        setDataProduct : (state, action) => {
                console.log(action);
        }
    }
})

export const {setDataProduct} = productSlice.actions

export default productSlice.reducer