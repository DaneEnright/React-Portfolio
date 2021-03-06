import React from "react";
import NavTabs from "./components/NavTabs";
import Bio from "./components/aboutMe";
import Contact from "./components/contact";
import Home from "./components/home";
import Portfolio from "./components/portfolio";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="portfolio-app">
      <NavTabs />
      <Bio />
      <Portfolio />
      <Contact />
      <Footer />

    </div>
  )

  }

export default App;
