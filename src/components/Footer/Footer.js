import React from "react";
import "./Footer.scss";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-inner">
        <div className="left-part">
          <Link to='/'>
            <img src={logo} alt="" />
          </Link>
          <div className="nav-links">
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
          <Link
            to="https://github.com/Ike-chukwu?tab=repositories"
            style={{ color: "unset" }}
          >
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link
            to="https://github.com/Ike-chukwu?tab=repositories"
            style={{ color: "unset" }}
          >
            <i className="fab fa-twitter"></i>
          </Link>
          <Link
            to="https://github.com/Ike-chukwu?tab=repositories"
            style={{ color: "unset" }}
          >
            <i className="fab fa-instagram"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
