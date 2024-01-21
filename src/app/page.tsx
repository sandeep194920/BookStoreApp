'use client'
import React from 'react'
import Header from '@/components/Header'
import Books from '@/components/Books'
import Modal from '@/components/Modal/Modal'

export default function Home() {
  return (
    <>
      <Header />
      <Books />
      <Modal />
    </>
  )
}
