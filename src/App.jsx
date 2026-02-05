import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css'
import Navbar from "./Component/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Services from "./pages/Services";
import MainSection from "./pages/Services";
import Footer from "./pages/Footer";

function App() {


  return (
    <>
      <BrowserRouter>
      <Navbar />
     
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App
