import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {
    isModalOpen: true,
  },
}

const appState = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    showModal: (state) => {
      state.value.isModalOpen = true
    },
    hideModal: (state) => {
      state.value.isModalOpen = false
    },
  },
})

export const { showModal, hideModal } = appState.actions
export default appState.reducer
