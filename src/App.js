import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import React from 'react';
import './App.css';
import About from './components/About/About';
import Navigation from './components/Navigation';
import Intro from './components/Intro/Intro';
import Contact from './components/Contact/Contact';
import Project from './components/Projects/Project';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Router>
     <Navigation />
     
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Project />} />
             <Route path="/resume" element={<Resume />} />
             <Route path="/contact" element={<Contact />} />
             </Routes>
       
        </Router>

        <Intro/>
        <About />
        <Project /> 
        <Resume />
        <Contact/>
        <Footer/>
                
    </div>
  );
}

export default App;
