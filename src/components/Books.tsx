import React from 'react'
import Book from './Book'
import { useAppSelector } from '@/redux/store'
import { FaPlusCircle } from 'react-icons/fa'
import Modal from './Modal/Modal'

function Books() {
  const allBooks = useAppSelector((state) => state.booksReducer.value.books)
  console.log('The books data is', allBooks)

  return (
    <>
      <section className="relative flex max-w-[90%] gap-20 flex-wrap justify-center md:justify-start my-20 ml-auto">
        {allBooks.map((book) => {
          return <Book key={book.id} {...book} />
        })}
        <div className="fixed bottom-10 right-10">
          <FaPlusCircle
            className="cursor-pointer"
            color="var(--color-green)"
            size={60}
          />
        </div>
      </section>
      <Modal />
    </>
  )
}

export default Books
