import React from "react";
import "./Transition.scss";
import { motion } from "framer-motion";

const Transition = (Component) => {
  const fadeInVariants = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 0,
    },
    exit: {
      scaleY: 1,
    },
  };
  const fadeOutVariants = {
    initial: {
      scaleY: 1,
    },
    animate: {
      scaleY: 0,
    },
    exit: {
      scaleY: 0,
    },
  };

  return () => (
    <>
      <Component />
      <motion.div
        className="fadeIn"
        variants={fadeInVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
      <motion.div
        className="fadeOut"
        variants={fadeOutVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
    </>
  );
};

export default Transition;
