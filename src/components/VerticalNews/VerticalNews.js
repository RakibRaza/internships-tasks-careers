import React, { useState } from 'react'
import './VerticalNews.css'
import { FaTimes } from "react-icons/fa";
import NewsModal from '../NewsModal/NewsModal';

const VerticalNews = ({ id, title, summary, published, removeNews, link }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const modalOpen = () => {
    setIsModalOpen(true)
  }
  const modalClose = () => {
    setIsModalOpen(false)
  }
  return (
    <>
      <div className="col-lg-6 g-4">
        <article className='news h-100 p-4' onClick={modalOpen}>
          <h4>{`${title?.slice(0, 25)}...`}</h4>
          <p>{`${summary?.slice(0, 50)}...`}</p>
          <p className='text-secondary'>{published}</p>
          <FaTimes className='remove' onClick={() => removeNews(id)} />
        </article>
      </div>
      {isModalOpen && <NewsModal link={link} modalClose={modalClose} />}
    </>
  )
}

export default VerticalNews
