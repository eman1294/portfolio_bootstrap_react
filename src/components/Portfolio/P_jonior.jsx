import React, { Component } from 'react'

export default class P_jonior extends Component {
  render() {
    let { img } = this.props.pic;
    return (

      <div className='col-lg-4 col-sm-12'>
        <img className='w-100 pb-3' src={`assets/image/${img}`} alt="pfolio" />
      </div>
    )
  }
}
