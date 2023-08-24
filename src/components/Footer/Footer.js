import React from "react";
import "./Footer.scss";
import logo from "../../assets/logo.svg";
import fb from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import ig from "../../assets/icons/instagram.svg";
import {Link} from "react-router-dom"


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-inner">
        <div className="left-part">
          <div className="nav-links">
            <Link to="/">
              <img className="logo" src={logo} alt="" />
            </Link>
            <Link to="/about">
              <span className="links">About</span>
            </Link>
            <Link to="/location">
              <span className="links">Location</span>
            </Link>
            <Link to="/careers">
              <span className="links">Careers</span>
            </Link>
          </div>
        </div>
        <div className="right-part">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
