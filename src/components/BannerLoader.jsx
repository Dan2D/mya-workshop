import React, { Component } from 'react'
import '../styles/BannerLoader.css'

class BannerLoader extends Component {
  render () {
    return (
      <div className="container">
        <div className="banner">
          LOADING
          <div className="banner-left"></div>
          <div className="banner-right"></div>
        </div>
      </div>
    )
  }
}

export default BannerLoader
