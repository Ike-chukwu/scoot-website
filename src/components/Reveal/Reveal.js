import React, { useEffect, useRef } from "react";
import { motion, inView, useAnimation, useInView } from "framer-motion";

const Reveal = ({ children }) => {
  const variants = {
    initial: {
      opacity: 0,
      y: 60,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation()

  useEffect(() => {
    if(isInView){
        mainControls.start("animate")
    }else{
      mainControls.start("initial")
    }
  }, [isInView])

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial={mainControls}
      animate={mainControls}
      transition={{
        trasition: {
          duration: 1.5,
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
