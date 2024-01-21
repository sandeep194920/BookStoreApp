import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { hideModal } from '@/redux/features/app-slice'
import { useAppSelector } from '@/redux/store'
import { addNewBook, editBook } from '@/redux/features/books-slice'

const categories = [
  'Select a genre',
  'Fiction',
  'Love Fantacy',
  'Thriller Mystery',
]

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  category: Yup.string().required('Category is required'),
  author: Yup.string().required('Author is required'),
  price: Yup.number()
    .min(1, 'Price must be at least 1')
    .required('Price is required'),
  pages: Yup.number()
    .min(1, 'Pages must be at least 1')
    .required('Pages is required'),
  language: Yup.string().required('Language is required'),
})

interface FormValues {
  title: string
  category: string
  author: string
  price: number
  pages: number
  language: string
}

function BookDetails() {
  const dispatch = useDispatch()
  const { currentBook, isAddMode, isEditMode } = useAppSelector(
    (state) => state.booksReducer.value
  )

  const initialValues: FormValues = currentBook

  // State variables
  const [formData, setFormData] = useState<FormValues>(initialValues)

  // Formik form submission handler
  const handleFormSubmit = (values: FormValues) => {
    // Update state with form data
    setFormData(values)
    isEditMode && dispatch(editBook({ updatedBookDetails: values }))
    isAddMode && dispatch(addNewBook({ newBook: values }))
  }

  return (
    <Formik
      initialValues={formData}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
    >
      <Form>
        <section className="w-[90%] lg:w-[70%] m-auto">
          <h2 className="text-2xl font-semibold text-center my-5 mb-10">
            Details
          </h2>
          {/* Title */}
          <div className="my-10">
            <div className="flex justify-between">
              <h3>Title</h3>
              <div>
                <Field
                  type="text"
                  name="title"
                  className="bg-transparent border-b-2 outline-none mb-3"
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="text-pink-300"
                />
              </div>
            </div>
          </div>

          {/* Author */}
          <div className="my-10">
            <div className="flex justify-between">
              <h3>Author</h3>
              <div>
                <Field
                  type="text"
                  name="author"
                  className="bg-transparent border-b-2 outline-none mb-3"
                />
                <ErrorMessage
                  name="author"
                  component="div"
                  className="text-pink-300"
                />
              </div>
            </div>
          </div>

          {/* Category */}
          <div className="my-10">
            <div className="flex justify-between">
              <h3>Category</h3>
              <div>
                <Field
                  as="select"
                  name="category"
                  className="bg-transparent border-b-2 outline-none mb-3 w-[11.4rem]"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="category"
                  component="div"
                  className="text-pink-300"
                />
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="my-10">
            <div className="flex justify-between">
              <h3>Price</h3>
              <div>
                <Field
                  type="number"
                  name="price"
                  className="bg-transparent border-b-2 outline-none mb-3"
                />
                <ErrorMessage
                  name="price"
                  component="div"
                  className="text-pink-300"
                />
              </div>
            </div>
          </div>
          {/* Pages */}
          <div className="my-10">
            <div className="flex justify-between">
              <h3>Pages</h3>
              <div>
                <Field
                  type="number"
                  name="pages"
                  className="bg-transparent border-b-2 outline-none mb-3"
                />
                <ErrorMessage
                  name="pages"
                  component="div"
                  className="text-pink-300"
                />
              </div>
            </div>
          </div>
          {/* Language */}
          <div className="my-10">
            <div className="flex justify-between">
              <h3>Language</h3>
              <div>
                <Field
                  type="text"
                  name="language"
                  className="bg-transparent border-b-2 outline-none mb-3"
                />
                <ErrorMessage
                  name="language"
                  component="div"
                  className="text-pink-300"
                />
              </div>
            </div>
          </div>
          {/* Buttons container */}
          <div className="flex justify-center gap-24 my-5 mt-15">
            <button
              type="submit"
              className="bg-[var(--color-light-blue)] px-6 py-2 rounded-lg"
            >
              Save
            </button>
            <button
              onClick={() => dispatch(hideModal())}
              className="bg-[var(--color-dark-pink)] px-6 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </section>
      </Form>
    </Formik>
  )
}

export default BookDetails
