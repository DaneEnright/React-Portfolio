import React from "react";
import NavBar from "./components/NavBar";
import Bio from "./components/pages/bio";
import Contact from "./components/pages/contact";
import Home from "./components/pages/home";
import Portfolio from "./components/pages/portfolio";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="portfolio-app">
      <NavBar />
      <Home />
    </div>
  )

  }

export default App;
