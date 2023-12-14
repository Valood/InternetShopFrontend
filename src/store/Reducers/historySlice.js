import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    history: []
}

export const historySlice = createSlice({
    name: 'historySlice',
    initialState,
    reducers: {
        setHistory(state, {payload}){
            state.history = payload
        },
        addOrderToHistory(state, {payload}){
            state.history = [...state.history, payload]
        },
    }
})

export default historySlice.reducer