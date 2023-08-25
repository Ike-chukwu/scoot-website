import React from "react";
import "./MobileNav.scss";
import close from "../../assets/icons/close.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MobileNav = (props) => {
  return (
    <motion.div
      className={props.isNavActive ? "mobile-nav active" : "mobile-nav"}
    >
      <Link
        to="/"
        onTouchStart={() => props.setNavActive(false)}
        onClick={() => props.setNavActive(false)}
      >
        <p className="m-link">Home</p>
      </Link>
      <Link to="/about" onClick={() => props.setNavActive(false)}>
        <p className="m-link">About</p>
      </Link>
      <Link to="/location" onClick={() => props.setNavActive(false)}>
        <p className="m-link">Locations</p>
      </Link>
      <Link to="/careers" onClick={() => props.setNavActive(false)}>
        <p className="m-link">Careers</p>
      </Link>
      <img src={close} alt="" onClick={() => props.setNavActive(false)} />
    </motion.div>
  );
};

export default MobileNav;
