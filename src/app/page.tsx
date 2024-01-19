'use client'
import { useAppSelector } from '@/redux/store'
import Login from './login'
import React from 'react'
import Header from '@/components/Header'
import Books from '@/components/Books'
import Backdrop from '@/components/Modal/Backdrop'
import Modal from '@/components/Modal/Modal'

export default function Home() {
  const { username, isModerator } = useAppSelector(
    (state) => state.authReducer.value
  )

  return (
    <>
      <Header />
      <Books />
      <Modal />

      {/* <Login />
      <h1>Username: {username}</h1>
      {isModerator && <h1>This user is a moderator</h1>} */}
    </>
  )
}
