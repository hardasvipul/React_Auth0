import React from "react";
import "./styles.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Footer />
      </Router>
    </div>
  );
}
