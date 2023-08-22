import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Location from "./pages/Location";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/location" element={<Location />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
      <SignUp/>
      <Footer />
    </div>
  );
}

export default App;
