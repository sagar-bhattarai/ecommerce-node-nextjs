import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./counter/counterSlice"
import userPreferencesReducer from './userPreference/userPreferencesSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    userPreferences: userPreferencesReducer
  }
})

export {store}