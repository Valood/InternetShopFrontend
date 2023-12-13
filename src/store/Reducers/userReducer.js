import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: {
        email: '',
        name: '',
        password: ''
    }
}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUser(state, action){
            state.user = action.payload
        },
        clearUser(state){
            state = initialState
        }
    }
})

export default userSlice.reducer