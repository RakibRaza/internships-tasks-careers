import React, { useEffect, useRef, useState } from 'react'
import './FeedbackModal.css'
import readerImage from '../../images/reader.svg'
import validator from 'validator';
import countryList from '../../data/countryList'
import { db } from '../../firebase';

const FeedbackModal = ({ modalClose }) => {
  const modalRef = useRef(null)
  const [user, setUser] = useState({ fName: '', lName: '', address: '', country: '', email: '', phone: '' })
  const [isEmail, setIsEmail] = useState(false)
  const [isPhone, setIsPhone] = useState(false)

  const [display, setDisplay] = useState(false)
  const [options] = useState(countryList)
  const wrapperRef = useRef(null)

  const handleModalClose = (e) => {
    if (e.target !== modalRef.current) {
      return
    }
    modalClose()
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setUser({ ...user, [name]: value })
  }

  const handleSearch = (country) => {
    setUser({ ...user, country })
    setDisplay(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isEmail && isPhone) {
      db.collection('feedbacks').add(user).then(() => alert('Feedback has been submitted')).catch((error) => alert(error.message))

      setUser({ fName: '', lName: '', address: '', country: '', email: '', phone: '' })
    }
  }

  useEffect(() => {
    const checkEmail = validator.isEmail(user.email)
    const checkPhone = validator.isMobilePhone(user.phone)

    setIsEmail(checkEmail)
    setIsPhone(checkPhone)
  }, [user.email, user.phone])

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleClickOutside = (e) => {
    const { current: wrap } = wrapperRef
    if (wrap && !wrap.contains(e.target)) {
      setDisplay(false)
    }
  }

  return (
    <div onClick={handleModalClose} ref={modalRef} className="feedback_modal">
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
          <button className='feed_btn' onClick={modalClose}>we're Listening!</button>
        </div>

        <div className="feedback_form pt-3 pe-5" style={{ paddingLeft: '400px' }}>
          <h4 className='fw-bold'>Thank you so much for taking the time!</h4>
          <p>Please provide the below details!</p>

          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="first_name" className="form-label">First Name:</label>
              <input type="text" value={user.fName} onChange={handleChange} name='fName' className="form-control w-50" id="first_name" placeholder='John' />
            </div>

            <div className="mb-2">
              <label htmlFor="last_name" className="form-label">Last Name:</label>
              <input type="text" value={user.lName} onChange={handleChange} name='lName' className="form-control w-50" id="last_name" placeholder='Doe' />
            </div>

            <div className="mb-2">
              <label htmlFor="address" className="form-label">Address:</label>
              <textarea className="form-control" value={user.address} onChange={handleChange} name='address' id="address" rows="3" placeholder='Enter your full Postal Address'></textarea>
            </div>

            <div className="mb-2">
              <label htmlFor="country" className="form-label">Country:</label>
              <div ref={wrapperRef} className='auto_complete w-75'>
                <input onClick={() => setDisplay(!display)} onChange={(e) => setUser({ ...user, country: e.target.value })} type="text" value={user.country} className="form-control search_input" id="country" placeholder='India' autoComplete='no' />
                {display && <ul className="suggestions list-group w-100 list-group-flush">
                  {options.filter(item => item.toLocaleLowerCase().indexOf(user.country.toLocaleLowerCase()) > -1).slice(0, 4).map((item, index) => {
                    return <li onClick={() => handleSearch(item)} key={index} className='list-group-item'>{item}</li>
                  })}
                </ul>}
              </div>
            </div>

            <div className='row mb-2'>
              <label htmlFor="email" className="form-label">Email ID:</label>
              <div className="col-6">
                <input name='email' type="email" value={user.email} onChange={handleChange} className="form-control" id="email" placeholder='example@gmail.com' />
              </div>
              {isEmail || <div className="col-6 align-self-center">
                <p className='mb-0 text-danger'>Please enter a valid e-mail</p>
              </div>}
            </div>

            <div className="row mb-3">
              <label htmlFor="phone" className="form-label">Phone Number:</label>
              <div className="col-2">
                <input type="text" className="form-control" placeholder="First name" placeholder='+91' />
              </div>
              <div className="col-4">
                <input name='phone' type="text" value={user.phone} onChange={handleChange} className="form-control" placeholder="Last name" placeholder='123456789' />
              </div>
              {isPhone || <div className="col-6 align-self-center">
                <p className='mb-0 text-danger'>Please enter a valid number</p>
              </div>}
            </div>

            <button type="submit" className="sbumit_btn">Submit Feedback</button>
          </form>

        </div>

      </div>
    </div>
  )
}

export default FeedbackModal
