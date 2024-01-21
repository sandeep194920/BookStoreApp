import React, { useEffect, useRef } from 'react'
import Book from './Book'
import { FaPlusCircle } from 'react-icons/fa'
import Modal from './Modal/Modal'
import { useAppSelector } from '@/redux/store'
import { setAddMode } from '@/redux/features/books-slice'
import { useDispatch } from 'react-redux'
import { showModal } from '@/redux/features/app-slice'

function Books() {
  const { books, newBookAdded } = useAppSelector(
    (state) => state.booksReducer.value
  )
  const dispatch = useDispatch()

  const bookAddHandler = () => {
    dispatch(setAddMode())
    dispatch(showModal())
  }

  // when new book is added, the UI should scroll to bottom to show the new book
  const booksRef = useRef<HTMLDivElement | null>(null)
  // Scroll to the bottom when books array changes
  useEffect(() => {
    if (newBookAdded && booksRef.current) {
      window.scrollTo({
        behavior: 'smooth',
        top: booksRef.current.offsetTop,
      })
    }
  }, [newBookAdded])

  return (
    <>
      <section className="relative flex max-w-[90%] gap-20 flex-wrap justify-center md:justify-start my-20 ml-auto">
        {books.length > 0 ? (
          books.map((book) => {
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
            onClick={bookAddHandler}
            className="cursor-pointer"
            color="var(--color-green)"
            size={60}
          />
        </div>
        <div ref={booksRef}></div>
      </section>
      <Modal />
    </>
  )
}

export default Books
