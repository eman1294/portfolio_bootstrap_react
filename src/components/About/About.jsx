import React, { Component } from 'react'
import style from './about.module.css'

export default class About extends Component {
  render() {
    return (
      <div id='about' className={`${style.about}`}>
        <div className="container">
          <div className={`${style.about_title} pt-5 pb-51`}>
            <h2>ABOUT</h2>
            <p className='pt-3 d-flex justify-content-center pt-3 pb-3'><span>_____________&nbsp;</span><span><i className='fa-solid fa-star'></i></span><span>&nbsp;_____________</span></p>

          </div>
          <div className="row pb-5">
            <div className="col-lg-6 col-sm-1">
              <p className='p-5'>Freelancer is a free bootstrap theme created by Start Bootstrap
                The download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
            <div className="col-lg-6 col-sm-1">
              <p className='p-5'>You can create your own custom avatar for the masthead,
                change the icon in the dividers,
                and add your email address to the contact form to make it fully functional!</p>
            </div>
          </div>
          <div className="butn w-100 text-center pb-5">
            <button className="border-1 rounded-1 text-center btn text-white border-white p-3" ><span><i class="fa-solid fa-download"></i></span> &nbsp; Free Download!</button>
          </div>
        </div>
      </div>
    )
  }
}
