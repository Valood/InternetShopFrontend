import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: []
}

export const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        setProducts(state, action){
            state.products = action.payload
        },
        addProduct(state, {payload}){
            state.products = [...state.products, payload]
        }
    }
})

export default productSlice.reducer