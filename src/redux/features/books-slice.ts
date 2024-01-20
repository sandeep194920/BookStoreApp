import { createSlice } from '@reduxjs/toolkit'

import { allBooks } from '@/utils/data'

const newBook = {
  title: '',
  category: '',
  language: '',
  price: 0,
  pages: 0,
  author: '',
}

const initialState = {
  value: {
    books: allBooks,
    isEditMode: false,
    isAddMode: false,
    currentBook: newBook,
  },
}

const books = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setEditMode: (state, action) => {
      state.value.isEditMode = true
      state.value.currentBook =
        state.value.books.find((book) => book.id === action.payload) || newBook
    },
    editBook: (state, action) => {
      // const { bookDetails } = action.payload
      // console.log('The values are', bookDetails)
      // state.value.isEditMode = true
      // state.value.books.map((book) => {
      //   return book.id === bookDetails.id ? { ...book, bookDetails } : book
      // })
    },
    addNewBook: (state, action) => {
      return {
        value: {
          ...initialState.value,
        },
      }
    },
    deleteBook: (state, action) => {
      const books = state.value.books.filter(
        (book) => book.id !== action.payload
      )
      return {
        value: {
          ...state.value,
          books,
        },
      }
    },
  },
})

export const { editBook, addNewBook, deleteBook, setEditMode } = books.actions
export default books.reducer
