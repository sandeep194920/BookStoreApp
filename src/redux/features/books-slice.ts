import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { allBooks } from '@/utils/data'

const initialState = {
  value: {
    books: allBooks,
  },
}

const books = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    editBook: () => {
      return initialState
    },
    addNewBook: (state, action) => {
      return {
        value: {
          ...initialState.value,
        },
      }
    },
    deleteBook: () => {},
  },
})

export const { editBook, addNewBook, deleteBook } = books.actions
export default books.reducer
