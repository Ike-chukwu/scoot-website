import React from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.svg";
import bars from "../../assets/icons/hamburger.svg";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { motion } from "framer-motion";

const Navbar = (props) => {
  const childContainer = {
    initial: {
      opacity: 0,
      y: -60,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      variants={childContainer}
      animate="animate"
      initial="initial"
      transition={{ delay: 1.5, duration: 0.7 }}
      className="nav"
    >
      <div className="left-content">
        <img
          className="menu-bar"
          onClick={() => props.setNavActive(!props.isNavActive)}
          onTouchStart={() => props.setNavActive(!props.isNavActive)}
          src={bars}
          alt=""
        />
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
      <Button>Get Scootin</Button>
    </motion.div>
  );
};

export default Navbar;
