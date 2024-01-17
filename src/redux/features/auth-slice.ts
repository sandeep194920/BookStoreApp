import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
  value: {
    isAuth: boolean
    username: string
    isModerator: boolean
  }
}

const initialState: InitialState = {
  value: {
    isAuth: false,
    username: '',
    isModerator: false,
  },
}

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: () => {
      return initialState
    },
    logIn: (state, action) => {
      return {
        value: {
          isAuth: true,
          username: action.payload,
          isModerator: false,
        },
      }
    },
    toggleModerator: (state) => {
      state.value.isModerator = !state.value.isModerator
    },
  },
})

export const { logIn, logOut, toggleModerator } = auth.actions
export default auth.reducer
