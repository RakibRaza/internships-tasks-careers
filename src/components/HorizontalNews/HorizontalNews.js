import React from 'react'
import { FaTimes } from "react-icons/fa";
const HorizontalNews = ({ title, summary, published }) => {
  return (
    <div className='col-12 g-3'>
      <article className='news py-3 ps-5'>
        <h4>{`${title?.slice(0, 70)}...`}</h4>
        <p>{`${summary?.slice(0, 100)}...`}</p>
        <p className='text-secondary mb-0'>{published}</p>
        <FaTimes className='remove' />
      </article>
    </div>
  )
}

export default HorizontalNews
