import React, { useState } from 'react'
import { FaTimes } from "react-icons/fa";
import NewsModal from '../NewsModal/NewsModal';
const HorizontalNews = ({ id, title, summary, published, link, removeNews }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const modalOpen = () => {
    setIsModalOpen(true)
  }
  const modalClose = () => {
    setIsModalOpen(false)
  }
  return (
    <>
      <div className='col-12 g-3'>
        <article onClick={modalOpen} className='news py-3 ps-5'>
          <h4>{`${title?.slice(0, 60)}...`}</h4>
          <p>{`${summary?.slice(0, 90)}...`}</p>
          <p className='text-secondary mb-0'>{published}</p>
          <FaTimes className='remove' onClick={() => removeNews(id)} />
        </article>
      </div>
      {isModalOpen && <NewsModal modalClose={modalClose} link={link} />}
    </>
  )
}

export default HorizontalNews
