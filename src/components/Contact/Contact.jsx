import React, { Component } from 'react'
import style from './contact.module.css'

export default class Contact extends Component {
  render() {
    return (
      <div id='contact' className={`${style.contact} pt-5`}>
        <div className="container">
          <div className={`${style.contact_title} pt-5 pb-5 text-center`}>
            <h1>CONTACT ME</h1>
            <p className='pt-3 d-flex justify-content-center pt-3 pb-3'><span>_____________&nbsp;</span><span><i className='fa-solid fa-star'></i></span><span>&nbsp;_____________</span></p>
          </div>

          <form className='w-50 m-auto'>
            <label htmlFor="name">Full Name</label>
            <input type="text" name="name" id="name" className="form-control bg-transparent border-top-0 border-start-0 border-end-0 rounded-0" />
            <br />
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" id="email" className="form-control bg-transparent border-top-0 border-start-0 border-end-0 rounded-0" />
            <br />
            <label htmlFor="phone">Phone Number</label>
            <input type="number" id="phone" name="phone" className="form-control bg-transparent border-top-0 border-start-0 border-end-0 rounded-0" />
            <br />
            <textarea name="msg" id="msg" cols="30" rows="10" placeholder="Message" className="form-control bg-transparent border-top-0 border-start-0 border-end-0 rounded-0"></textarea>
            <br />
            <button className='rounded p-3 text-white'>Send</button>
          </form>
        </div>
      </div>
    )
  }
}
