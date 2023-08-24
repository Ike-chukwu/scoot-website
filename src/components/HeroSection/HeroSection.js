import React, { useEffect } from "react";
import "./HeroSection.scss";
import whitecircle from "../../assets/patterns/white-circles.svg";
import { motion } from "framer-motion";

const HeroSection = () => {
  const parentContainer = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 2.4,
        duration: 0.7,
      },
    },
  };
  const childContainer = {
    initial: {
      opacity: 0,
      y: 60,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="hero" initial='false'>
      <motion.section
        variants={parentContainer}
        initial="initial"
        animate="animate"
        className="hero-section"
      >
        <motion.h1
          variants={childContainer}
          transition={{ delay: 3.3, duration: 0.7 }}
        >
          Scooter sharing <br /> mode simple
        </motion.h1>
        <motion.p
          variants={childContainer}
          transition={{ delay: 4.2, duration: 0.7 }}
        >
          Scoot takes the hassle out of urban mobility. Our bikes are placed in
          convenient locations in each of our cities. Use our app to locate the
          nearest bike, unlock it with a tap, and you’re away!
        </motion.p>
        <motion.img
          variants={childContainer}
          transition={{ delay: 5.1, duration: 0.7 }}
          src={whitecircle}
          alt=""
        />
        <motion.Button
          variants={childContainer}
          transition={{ delay: 6.0, duration: 0.7 }}
        >
          Get Scootin
        </motion.Button>
      </motion.section>
    </div>
  );
};

export default HeroSection;
