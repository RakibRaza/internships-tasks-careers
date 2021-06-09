import React, { useState } from 'react'
import './SideBar.css'
import readerImage from '../../images/reader.svg'
import verticalIcon from '../../images/vertical.svg'
import horizontalIcon from '../../images/horizontal.svg'
import FeedbackModal from '../FeedbackModal/FeedbackModal'

const SideBar = ({ viewVertical, viewHorizontal, isVertical }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)


  const modalOpen = () => {
    setIsModalOpen(true)
  }
  const modalClose = () => {
    setIsModalOpen(false)
  }
  return (
    <>
      <div className='root'>
        <div className='reader'>
          <img src={readerImage} alt="Reader" />
          <div className="reader_text">
            <h4>Hi Reader,</h4>
            <p>Here's your News!</p>
          </div>
        </div>

        <div className="toggle">
          <h3>View Toggle</h3>
          <button onClick={viewVertical} className={`toggle_btn ${isVertical && 'active'} ver_btn`}>
            <img src={verticalIcon} alt="vertical icon" />
          </button>
          <button onClick={viewHorizontal} className={`toggle_btn ${isVertical || 'active'} hor_btn`}>
            <img src={horizontalIcon} alt="horizontal icon" />
          </button>
        </div>

        <div className="feedback">
          <h3>Have a Feedback?</h3>
          <button onClick={modalOpen} className='feed_btn'>we're Listening!</button>
        </div>
      </div>
      {isModalOpen && <FeedbackModal modalClose={modalClose} />}

    </>
  )
}

export default SideBar
