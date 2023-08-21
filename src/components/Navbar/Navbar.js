import React from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import Button from "../Button/Button";


const Navbar = () => {
  return (
    <div className="nav">
      <div className="left-content">
        <Link to='/'>
          <img src={logo} alt="" />
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
      <Button>Get Scootin</Button>
    </div>
  );
};

export default Navbar;
