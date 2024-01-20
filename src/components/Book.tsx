import React from 'react'
import { Book as BookType } from '@/utils/data'
import { useDispatch } from 'react-redux'
import { setEditMode } from '@/redux/features/books-slice'
import { showModal } from '@/redux/features/app-slice'

function Book(props: BookType) {
  const { id, title, price, category, author, language, pages } = props
  const dispatch = useDispatch()

  const bookEditHandler = () => {
    dispatch(setEditMode(id))
    dispatch(showModal())
  }

  const bookDetails = [
    category,
    `${price} CAD`,
    language,
    `${pages} pages`,
    `Written by ${author}`,
  ]
  let bookImage
  let bookHeader

  switch (category) {
    case 'Love Fantacy':
      bookImage = 'love-fantacy.jpeg'
      bookHeader = 'love'
      break
    case 'Thriller Mystery':
      bookImage = 'mystery.jpg'
      bookHeader = 'mystery'
      break
    case 'Fiction':
      bookImage = 'fiction.jpg'
      bookHeader = 'fiction'
      break
    default:
      bookImage = 'mystery.jpg'
  }
  return (
    <article
      onClick={() => bookEditHandler()}
      className="min-w-[17rem] max-w-[17rem] space-y-6 rounded-lg shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] sm:min-w-[20rem] sm:max-w-[20rem] md:min-w-[22rem] md:max-w-[22rem] cursor-pointer"
    >
      <div
        className="clippath relative h-[13rem] rounded-tl-lg rounded-tr-lg bg-cover backdrop-blur-none"
        style={{
          backgroundImage: `url(/images/${bookImage})`,
          backgroundSize: 'cover',
          backgroundBlendMode: 'screen',
          backgroundPosition: 'center',
        }}
      >
        <h4 className="absolute right-[0rem] top-[10rem] text-right text-xl sm:text-2xl">
          <span
            className={`${bookHeader} text-white italic px-3 py-2 tracking-wider`}
          >
            {title}
          </span>
        </h4>
      </div>
      <ul className="space-y-5 pb-2">
        {bookDetails.map((bookDetail) => (
          <div
            className="space-y-[1rem] text-xs sm:text-sm md:text-base"
            key={bookDetail}
          >
            <li className="mx-12 text-center">{bookDetail}</li>
            <div className="mx-auto w-[70%] border border-b-[1px] border-dashed border-gray-900"></div>
          </div>
        ))}
      </ul>
    </article>
  )
}

export default Book
