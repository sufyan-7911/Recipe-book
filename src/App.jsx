import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './style.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Recipes from "./components/Recipes";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-container">
          <Navbar />
          <main className="app-main">
            <Routes>
              <Route path="/" element={<Recipes />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/recipes" element={<Recipes />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

