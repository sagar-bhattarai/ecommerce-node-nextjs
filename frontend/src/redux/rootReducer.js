import { combineReducers } from '@reduxjs/toolkit'
import userPreferencesReducer from './userPreference/userPreferencesSlice';
import authReducer from "./auth/authSlice"

const rootReducer = combineReducers({
    userPreferences: userPreferencesReducer,
    auth: authReducer
})

export default rootReducer;