// INFO: Holds all of our states inside of our redux
import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth-slice'
import booksReducer from './features/books-slice'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

export const store = configureStore({
  // INFO:  Any reducer here is a func that takes in an action and the prev state of app, and makes some changes to that state and returns that new state
  // Each sub-reducer inside "reducer" key is a slice that contains a specific set/subset of variables
  reducer: {
    authReducer,
    booksReducer,
  },
})

// INFO: We might use this type in other places so let's export these
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector // required for usage of our state values
