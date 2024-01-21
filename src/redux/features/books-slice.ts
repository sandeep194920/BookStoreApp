import { createSlice } from '@reduxjs/toolkit'
import { allBooks } from '@/utils/data'
import { v4 as uuid } from 'uuid'

const newBook = {
  title: '',
  category: '',
  language: '',
  price: 1,
  pages: 1,
  author: '',
}

const initialState = {
  value: {
    books: allBooks,
    isEditMode: false,
    isAddMode: false,
    currentBook: newBook,
    newBookAdded: false,
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
    setAddMode: (state) => {
      state.value.currentBook = newBook
      state.value.isAddMode = true
    },
    editBook: (state, action) => {
      const { updatedBookDetails } = action.payload
      state.value.isEditMode = false
      state.value.books = state.value.books.map((book) =>
        book.id === updatedBookDetails.id ? updatedBookDetails : book
      )
    },
    addNewBook: (state, action) => {
      const { newBook } = action.payload
      state.value.isAddMode = false
      state.value.newBookAdded = true
      state.value.books.push({
        id: uuid(),
        ...newBook,
      })
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

export const { editBook, addNewBook, deleteBook, setEditMode, setAddMode } =
  books.actions
export default books.reducer
