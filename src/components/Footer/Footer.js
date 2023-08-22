import React from 'react'
import './Footer.scss'
import logo from '../../assets/logo.svg'
import fb from '../../assets/icons/facebook.svg'
import twitter from '../../assets/icons/twitter.svg'
import ig from '../../assets/icons/instagram.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="left-part">
        <img src={logo} alt="" />
        <div className="nav-links">
          <span>About</span>
          <span>Location</span>
          <span>Careers</span>
        </div>
      </div>
      <div className="right-part">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
      </div>
    </div>
  )
}

export default Footer