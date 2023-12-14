import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartProducts: []
}

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        setCart(state, {payload}){
            state.cartProducts = payload
        },
        addToCart(state, {payload}){
            state.cartProducts = [...state.cartProducts, payload]
        },
        changeQuantity(state, {payload}){
            const cartCopy = [...state.cartProducts];
            const productIndex = cartCopy.findIndex(cartProduct => cartProduct.id === payload.product.id)
            cartCopy[productIndex] = {...payload.product, quantity: payload.quantity} 
            state.cartProducts = cartCopy
        },
        clearCart(state){
            state.cartProducts = []
        }
    }
})

export default cartSlice.reducer