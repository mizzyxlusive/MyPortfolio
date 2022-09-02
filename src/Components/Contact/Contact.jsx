import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact-form">
      <div className="contact">
        <div className="c-left">
          <span>Get in touch</span>
          <span>Contact me</span>

          <div className='blur sblur1' style={{background: "#abf1ff94"}}></div>
        </div>
      </div>

      <div className="c-right">
        <form>
          <input type="text" name='user-name' className='user' placeholder='Name'/>
          <input type="email" name='user-email' className='user' placeholder='Email'/>
          <textarea name="message" className='user' placeholder='message'></textarea>
          <input type="submit" value='Send' className='button'/>
          <div className='blur c-blur1' style={{background: "var(--purple)"}}></div>
        </form>
      </div>
    </div>
  )
}

export default Contact