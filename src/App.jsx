import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Work from "./components/Work/Work";
import Projects from "./components/Projects/Projects";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import { usePortfolioNavigation } from "./hooks/usePortfolioNavigation";

function PortfolioContent() {
  const { activePath, scrollToSection } = usePortfolioNavigation();

  return (
    <div className="app-shell">
      <CustomCursor />
      <div className="ambient-field"></div>
      <div className="absolute inset-0 app-grid"></div>
      <div className="noise-layer"></div>
      <Navbar activePath={activePath} onNavigate={scrollToSection} />
      <main className="relative z-10 pt-20">
        <Hero onNavigate={scrollToSection} />
        <Skills />
        <Projects />
        <Gallery />
        <Education />
        <Work />
        <Contact />
      </main>
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="*" element={<PortfolioContent />} />
    </Routes>
  );
}

export default App;
