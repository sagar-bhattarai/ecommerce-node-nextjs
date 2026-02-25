import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./authActions";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        loading: false,
        error: null,
        user: null
    },
    reducers: {
        getUser: (state, action) => {
            return state.user
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state, action) => {
                state.loading = true;
                state.user = null;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export default authSlice.reducer;