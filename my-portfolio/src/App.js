import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ProjectDetails from './components/ProjectDetails'; // Import your ProjectDetails component

export default function App() {
  return (
    <Router>
      <main className="text-gray-300 bg-gradient-to-r from-gray-900 via-gray-750 to-gray-600 body-font">
        <Navbar />
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/skills" exact component={Skills} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/project/:id" component={ProjectDetails} />
          {/* Additional routes can be defined here */}
        </Switch>
      </main>
    </Router>
  );
}
