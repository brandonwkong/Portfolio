import React from "react";
import About from "./components/About"; 
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <main className="text-gray-300 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
