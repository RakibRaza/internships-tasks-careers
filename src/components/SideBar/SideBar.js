import React from 'react'
import './SideBar.css'
import readerImage from '../../images/reader.svg'
const SideBar = () => {
  return (
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
        <button className='toggle_btn'>ths</button>
      </div>

      <div className="feedback">
        <h3>Have a Feedback?</h3>
        <button className='feed_btn'>we're Listening!</button>
      </div>
    </div>
  )
}

export default SideBar
