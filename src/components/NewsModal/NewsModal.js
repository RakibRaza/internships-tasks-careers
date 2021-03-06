import React from 'react'
import './NewsModal.css'
const NewsModal = ({ link, modalClose }) => {


  return (
    <div onClick={modalClose} className="news_modal">
      <div className="modal_iframe">
        <iframe className='iframe' src={link} frameBorder="0"></iframe>
      </div>

    </div>
  )
}

export default NewsModal
