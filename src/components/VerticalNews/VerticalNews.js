import React from 'react'
import './VerticalNews.css'
import { FaTimes } from "react-icons/fa";

const VerticalNews = ({ id, title, summary, published, removeNews }) => {
  return (
    <div className="col-lg-6 g-4">
      <article className='news h-100 p-4'>
        <h4>{`${title?.slice(0, 25)}...`}</h4>
        <p>{`${summary?.slice(0, 50)}...`}</p>
        <p className='text-secondary'>{published}</p>
        <FaTimes className='remove' onClick={() => removeNews(id)} />
      </article>
    </div>
  )
}

export default VerticalNews
