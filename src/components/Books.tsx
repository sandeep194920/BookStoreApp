import React from 'react'
import Book from './Book'
import { useAppSelector } from '@/redux/store'

function Books() {
  const allBooks = useAppSelector((state) => state.booksReducer.value.books)
  console.log('The books data is', allBooks)

  return (
    <section>
      {allBooks.map((book) => {
        return <Book key={book.id} {...book} />
      })}
    </section>
  )
}

export default Books
