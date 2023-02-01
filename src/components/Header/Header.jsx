import React, { Component } from 'react'
import style from './Header.module.css'

export default class Header extends Component {
  render() {
    return (
      <header id='header' className={`${style.header}`}>
        <div className="container">
          <img className='mb-5' src="assets/image/avataaars.svg" width={250} alt="" />
          <h1>START BOOTSTRAP</h1>
          <p className=' d-flex justify-content-center pt-3 pb-3'><span>_____________&nbsp;</span><span><i className='fa-solid fa-star'></i></span><span>&nbsp;_____________</span></p>
          <p className='mb-3'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </header>
    )
  }
}
