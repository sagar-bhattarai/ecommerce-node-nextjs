import { createSlice } from "@reduxjs/toolkit";

const userPreferencesSlice = createSlice({
    name: "userPreferences",
    initialState: {
        theme: "light",
    },
    reducers:{

    }
})

export default userPreferencesSlice.reducer;