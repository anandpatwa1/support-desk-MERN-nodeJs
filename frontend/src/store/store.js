import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./userAuth/authSlice";
const store = configureStore({
    reducer: {
        auth: authReducer
    }
})

export default store