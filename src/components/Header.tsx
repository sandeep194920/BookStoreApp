import Image from 'next/image'
import React from 'react'
import { FaGithub } from 'react-icons/fa'

function Header() {
  return (
    <header className="bg-gradient-header text-white p-3 flex justify-between items-center px-14">
      <div className="flex justify-evenly items-center space-x-6">
        <Image
          src="/images/arrow-star.png"
          height={100}
          width={100}
          alt="logo"
        />
        <h1 className="text-3xl font-medium">Book Paradise</h1>
      </div>
      <a
        className="cursor-pointer"
        href="https://github.com/sandeep194920/BookStoreApp"
        target="_blank"
      >
        <FaGithub size={40} />
      </a>
    </header>
  )
}

export default Header
