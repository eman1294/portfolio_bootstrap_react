import React, { Component } from 'react'
import style from './Portfolio.module.css'
import P_jonior from './P_jonior'

export default class Portfolio extends Component {
  state = {
    ppic: [
      { id: 0, img: "cabin.png" },
      { id: 1, img: "cake.png" },
      { id: 2, img: "circus.png" },
      { id: 3, img: "game.png" },
      { id: 4, img: "safe.png" },
      { id: 5, img: "submarine.png" }
    ]
  }
  render() {
    let { ppic } = this.state;
    return (
      <div id='portfolio'>
        <div className="container">
          <div className={`${style.portfolio_title} pt-5 pb-5`}>
            <h2 className='mt-5 w-100 text-center'>PORTFOLIO</h2>
            <p className='pt-3 d-flex justify-content-center pt-3 pb-3'><span>_____________&nbsp;</span><span><i className='fa-solid fa-star'></i></span><span>&nbsp;_____________</span></p>
          </div>
          <div className="row justify-content-center py-4">
            {ppic.map((pic) => {
              return <P_jonior pic={pic} key={pic.id} />
            })}
          </div>
        </div>
      </div>
    )
  }
}
