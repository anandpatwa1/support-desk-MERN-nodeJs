import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const localUser =  localStorage.getItem('user') 

const initialState = {
    user: localUser ? JSON.parse(localUser) : null,
    isLoding: false,
    isSuccess: false,
    isError: false,
    message: ''
}

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoding = true
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoding = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(register.rejected, (state , action) => {
                state.isLoding = false
                state.isSuccess = false
                state.isError = true
                state.user = null
                state.message = action.payload
            })
            .addCase(login.pending, (state) => {
                state.isLoding = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoding = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(login.rejected, (state , action) => {
                state.isLoding = false
                state.isSuccess = false
                state.isError = true
                state.user = null
                state.message = action.payload
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null
                state.isLoding = false
                state.isSuccess = false
                state.isError = false
                state.message = ''
            })

    }
})

// Async Thunk

export const register = createAsyncThunk('/register', async (user, thunkAPI) => {
    try {
        return await authService.registerUser(user)
    } catch (error) {
        const message = error.message.data.message
        
        return thunkAPI.rejectWithValue(message)
    }
})
export const login = createAsyncThunk('/login', async (user, thunkAPI) => {
    try {
        return await authService.loginUser(user)
    } catch (error) {
        const message = error.message.data.message
        return thunkAPI.rejectWithValue(message)
    }
})

export const logout = createAsyncThunk('/logout', () => {
    localStorage.removeItem('user')
})

export default authSlice.reducer