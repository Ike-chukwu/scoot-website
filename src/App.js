import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Location from "./pages/Location";
import SignUp from "./components/SignUp/SignUp";
import { motion } from "framer-motion";
import {  useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import MobileNav from "./components/MobileNav/MobileNav";

function App() {

  const [isNavActive, setNavActive] = useState(false)


  const appVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  };

  const location = useLocation();
  return (
    <motion.div
      className="App"
      variants={appVariants}
      initial="initial"
      animate="animate"
    >
      <Navbar setNavActive={setNavActive} isNavActive={isNavActive} />
      <MobileNav setNavActive={setNavActive} isNavActive={isNavActive}/>
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/location" element={<Location />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </AnimatePresence>
      <SignUp />
      <Footer />
    </motion.div>
  );
}

export default App;
