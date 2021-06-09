import React, { useRef } from 'react'
import './FeedbackModal.css'
import readerImage from '../../images/reader.svg'

const FeedbackModal = ({ modalClose }) => {
  const modalRef = useRef(null)

  const handleClick = (e) => {
    if (e.target !== modalRef.current) {
      return
    }

    modalClose()
  }
  return (
    <div onClick={handleClick} ref={modalRef} className="feedback_modal">
      <div className="modal_form">
        <div className='reader'>
          <img src={readerImage} alt="Reader" />
          <div className="reader_text">
            <h4>Hi Reader,</h4>
            <p>Here's your News!</p>
          </div>
        </div>

        <div className="feedback from_feed">
          <h3>Have a Feedback?</h3>
          <button className='feed_btn'>we're Listening!</button>
        </div>

        <div className="feedback_form pt-3 pe-5" style={{ paddingLeft: '400px' }}>
          <h4 className='fw-bold'>Thank you so much for taking the time!</h4>
          <p>Please provide the below details!</p>

          <form>
            <div className="mb-2">
              <label htmlFor="first_name" className="form-label">First Name:</label>
              <input type="text" className="form-control w-75" id="first_name" placeholder='John' />
            </div>

            <div className="mb-2">
              <label htmlFor="last_name" className="form-label">Last Name:</label>
              <input type="text" className="form-control w-75" id="last_name" placeholder='Doe' />
            </div>

            <div className="mb-2">
              <label htmlFor="address" className="form-label">Address:</label>
              <textarea className="form-control" id="address" rows="3" placeholder='Enter your full Postal Address'></textarea>
            </div>

            <div className="mb-2">
              <label htmlFor="country" className="form-label">Country:</label>
              <input type="text" className="form-control w-75" id="country" placeholder='India' />
            </div>

            <div className="mb-2">
              <label htmlFor="email" className="form-label">Email ID:</label>
              <input type="text" className="form-control w-75" id="email" placeholder='example@gmail.com' />
            </div>

            <div className="row mb-3">
              <label htmlFor="email" className="form-label">Phone Number:</label>
              <div className="col-3">
                <input type="text" className="form-control" placeholder="First name" placeholder='+91' />
              </div>
              <div className="col-9">
                <input type="text" className="form-control" placeholder="Last name" placeholder='123456789' />
              </div>
            </div>


            <button type="submit" className="sbumit_btn">Submit Feedback</button>
          </form>


        </div>

      </div>
    </div>
  )
}

export default FeedbackModal
