import React, { Component } from 'react'
import style from './footer.module.css'

export default class Footer extends Component {
  render() {
    return (
      <footer className='text-white'>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className="location">
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive<br />
                  Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="icons">
                <h3>AROUND THE WEB</h3>
                <div className="d-flex gap-4 justify-content-space-evenly">
                  <div className={`${style.si} text-left`}>
                    <a href='#'><i className="fa-brands fa-facebook-f"></i></a>
                  </div>
                  <div className={`${style.si} text-left`}><a href='#'><i className="fa-brands fa-twitter"></i></a>
                  </div>
                  <div className={`${style.si} text-left`}><a href='#'><i className="fa-brands fa-linkedin-in"></i></a>
                  </div>
                  <div className={`${style.si} text-left`}><a href='#'><i className="fa-brands fa-dribbble"></i></a></div>

                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="aboutfl">
                <h3>ABOUT FREELANCER</h3>
                <p>Freelance is a free to use, MIT licensed Bootstrap theme created by <a href='#'>Start Bootstrap</a> .</p>
              </div>
            </div>
          </div>
        </div>
        <div className="copyr">
          <p className={`${style.copy} text-center p-3 text-white mb-0`}>Copyright &copy; Your Website Eng: Eman MAhmoud 2023</p>
        </div>
      </footer>
    )
  }
}
