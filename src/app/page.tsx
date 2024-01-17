'use client'
import { useAppSelector } from '@/redux/store'
import Login from './login'
import React from 'react'

export default function Home() {
  const { username, isModerator } = useAppSelector(
    (state) => state.authReducer.value
  )

  return (
    <>
      <Login />
      <h1>Username: {username}</h1>
      {isModerator && <h1>This user is a moderator</h1>}
    </>
  )
}
