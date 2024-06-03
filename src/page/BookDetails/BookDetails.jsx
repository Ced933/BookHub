import React from 'react'
import { useParams } from 'react-router-dom'

export default function BookDetails({arrayBooks}) {

console.log(arrayBooks);
  
  const {id} = useParams();
  // const bookChoose = arrayBooks.filter((book) => { return book.cover_i === id})
    console.log(id);
    // console.log(bookChoose);
  return (
    <div className='bookcard-box'>
      {/* <img className='cover-book' src={ `https://covers.openlibrary.org/b.jpg`} alt="" /> */}
      {/* <h3 className='title-book'>{}</h3> */}
      <p className='title-info'><strong>Author : </strong> </p>
      <p className='title-info'><strong>Total Edition : </strong></p>
      <p className='title-publish'><strong>First Publish Year : </strong></p>
  </div>
  )
}
