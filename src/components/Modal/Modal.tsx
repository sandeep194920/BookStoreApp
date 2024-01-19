import React from 'react'
import Backdrop from './Backdrop'
import { useAppSelector } from '@/redux/store'
import BookDetails from '../BookDetails'

function Modal() {
  const { isModalOpen } = useAppSelector((state) => state.appReducer.value)

  return (
    isModalOpen && (
      <>
        <Backdrop />
        <div className="bg-book-details top-[25%] px-10 py-5 w-[90%] md:w-[70%] lg:w-[50%] left-[5%] md:left-[15%] lg:left-[25%] text-white fixed">
          <BookDetails />
        </div>
      </>
    )
  )
}

export default Modal
