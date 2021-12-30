import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import React from 'react';
import './App.css';
import About from './components/About/About';
import Navigation from './components/Navigation';
import Intro from './components/Intro/Intro';
import Contact from './components/Contact/Contact';
import Project from './components/Projects/Project';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Router>
     <Navigation />
     <Intro/>
        <Routes>
            <Route path="/#" element={<Intro />} />
            <Route path="/#about" element={<About />} />
            <Route path="/#projects" element={<Project />} />
             <Route path="/#experience" element={<Experience />} />
             <Route path="/#contact" element={<Contact />} />
        </Routes>

        <About />
        <Project /> 
        <Experience />
        <Contact/>
        <Footer/>
        </Router>
                
    </div>
  );
}

export default App;
