import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css'
import Navbar from "./Component/Navbar";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Services from "./pages/Services";
import MainSection from "./pages/Services";
import Footer from "./pages/Footer";
import Contact from "./pages/Contact";

function App() {


  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />

        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
