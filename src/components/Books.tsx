import React from 'react'
import Book from './Book'
import { useAppSelector } from '@/redux/store'
import { FaPlusCircle } from 'react-icons/fa'
import Modal from './Modal/Modal'

function Books() {
  const allBooks = useAppSelector((state) => state.booksReducer.value.books)

  return (
    <>
      <section className="relative flex max-w-[90%] gap-20 flex-wrap justify-center md:justify-start my-20 ml-auto">
        {allBooks.length > 0 ? (
          allBooks.map((book) => {
            return <Book key={book.id} {...book} />
          })
        ) : (
          <h3 className="text-2xl font-extrabold">
            No more books here. Please reload the page or add one by clicking +
            icon below
          </h3>
        )}
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
