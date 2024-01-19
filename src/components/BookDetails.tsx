import React from 'react'

function BookDetails() {
  return (
    <section className="w-[90%] lg:w-[70%] m-auto">
      <h2 className="text-2xl font-semibold text-center my-5 mb-10">Details</h2>
      <form action="">
        <div className="flex my-10 justify-between">
          <h3>Title</h3>
          <input
            type="text"
            value="Angels and Deomns"
            className="bg-transparent border-b-2 outline-none"
          />
        </div>
        <div className="flex my-10 justify-between">
          <h3>Category</h3>
          <input
            type="text"
            value="Fiction"
            className="bg-transparent border-b-2 outline-none"
          />
        </div>
        <div className="flex my-10 justify-between">
          <h3>Author</h3>
          <input
            type="text"
            value="Dan Brown"
            className="bg-transparent border-b-2 outline-none"
          />
        </div>
        <div className="flex my-10 justify-between">
          <h3>Price</h3>
          <input
            type="text"
            value="30$"
            className="bg-transparent border-b-2 outline-none"
          />
        </div>
        <div className="flex my-10 justify-between">
          <h3>Pages</h3>
          <input
            type="text"
            value="223"
            className="bg-transparent border-b-2 outline-none"
          />
        </div>
        <div className="flex my-10 justify-between">
          <h3>Language</h3>
          <input
            type="text"
            value="English"
            className="bg-transparent border-b-2 outline-none"
          />
        </div>
        <div className="flex justify-center gap-24 my-5 mt-15">
          <button className="bg-[var(--color-light-blue)] px-6 py-2 rounded-lg">
            Save
          </button>
          <button className="bg-[var(--color-light-pink)] px-6 py-2 rounded-lg">
            Close
          </button>
        </div>
      </form>
    </section>
  )
}

export default BookDetails
