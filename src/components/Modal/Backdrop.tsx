import React from 'react'
import { hideModal } from '@/redux/features/app-slice'
import { useDispatch } from 'react-redux'

function Backdrop() {
  const dispatch = useDispatch()

  return (
    <div
      onClick={() => dispatch(hideModal())}
      className="fixed h-full w-full top-0 left-0 bg-[var(--color-light-grey)]"
    ></div>
  )
}

export default Backdrop
