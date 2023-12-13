import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: {
        email: '',
        username: '',
        password: ''
    }
}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUser(state, payload){
            state.user = payload
        },
    }
})

export default userSlice.reducer