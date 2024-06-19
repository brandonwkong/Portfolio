import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Note the use of Routes instead of Switch
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ProjectDetails from './components/ProjectDetails'; // Assuming you have a ProjectDetails component

export default function App() {
  return (
    <Router>
      <main className="text-gray-300 bg-gradient-to-r from-gray-900 via-gray-750 to-gray-600 body-font">
        <Navbar />
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          {/* Additional routes can be defined here */}
        </Routes>
      </main>
    </Router>
  );
}
