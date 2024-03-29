// this file contains all the books (array of books) we render from
import { v4 as uuid } from 'uuid'

export type Book = {
  id: string
  title: string
  category: 'Love Fantacy' | 'Thriller Mystery' | 'Fiction'
  language: string
  price: number
  pages: number
  desc: string
  author: string
}

export const allBooks: Book[] = [
  {
    id: uuid(),
    title: 'The Sacrifice',
    category: 'Love Fantacy',
    language: 'English',
    price: 30,
    pages: 220,
    desc: 'The sacrifice, lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vel quis odit corporis impedit! Exercitationem ipsum quo pariatur dignissimos veniam natus soluta eaque expedita sunt saepe.',
    author: 'Emma Hawthorne',
  },
  {
    id: uuid(),
    title: 'Innocent Criminal',
    category: 'Thriller Mystery',
    language: 'Spanish',
    price: 45,
    pages: 250,
    desc: 'The innocent criminal, lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vel quis odit corporis impedit! Exercitationem ipsum quo pariatur dignissimos veniam natus soluta eaque expedita sunt saepe.',
    author: 'Alexander Blackwell',
  },
  {
    id: uuid(),
    title: 'Power of belief',
    category: 'Fiction',
    language: 'French',
    price: 50,
    pages: 270,
    desc: 'The power of belief, Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vel quis odit corporis impedit! Exercitationem ipsum quo pariatur dignissimos veniam natus soluta eaque expedita sunt saepe.',
    author: 'Olivia Sterling',
  },
  {
    id: uuid(),
    title: 'Self respect',
    category: 'Fiction',
    language: 'English',
    price: 25,
    pages: 170,
    desc: 'The self respect, lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vel quis odit corporis impedit! Exercitationem ipsum quo pariatur dignissimos veniam natus soluta eaque expedita sunt saepe.',
    author: 'Benjamin Knight',
  },
  {
    id: uuid(),
    title: 'A Sweet Pain',
    category: 'Love Fantacy',
    language: 'German',
    price: 43,
    pages: 120,
    desc: 'The sweet pain, lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vel quis odit corporis impedit! Exercitationem ipsum quo pariatur dignissimos veniam natus soluta eaque expedita sunt saepe.',
    author: 'Isabella Monroe',
  },
  {
    id: uuid(),
    title: 'Invisible weapon',
    category: 'Thriller Mystery',
    language: 'English',
    price: 35,
    pages: 260,
    desc: 'The invisible weapon, lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vel quis odit corporis impedit! Exercitationem ipsum quo pariatur dignissimos veniam natus soluta eaque expedita sunt saepe.',
    author: 'Elijah Hartman',
  },
  {
    id: uuid(),
    title: 'Who can it be?',
    category: 'Thriller Mystery',
    language: 'English',
    price: 55,
    pages: 250,
    desc: 'How can it be, lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vel quis odit corporis impedit! Exercitationem ipsum quo pariatur dignissimos veniam natus soluta eaque expedita sunt saepe.',
    author: 'Sophia Carmichael',
  },
  {
    id: uuid(),
    title: 'The Day before',
    category: 'Love Fantacy',
    language: 'English',
    price: 30,
    pages: 230,
    desc: 'The Day before, lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vel quis odit corporis impedit! Exercitationem ipsum quo pariatur dignissimos veniam natus soluta eaque expedita sunt saepe.',
    author: 'Nathanial Drake',
  },
  {
    id: uuid(),
    title: "Life isn't serious",
    category: 'Fiction',
    language: 'English',
    price: 25,
    pages: 170,
    desc: "Life isn't serious, lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vel quis odit corporis impedit! Exercitationem ipsum quo pariatur dignissimos veniam natus soluta eaque expedita sunt saepe.",
    author: 'Ava Summers',
  },
]
