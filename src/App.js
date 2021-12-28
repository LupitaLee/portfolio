import {Routes, Route} from 'react-router-dom'
import React from 'react';
import './App.css';
import About from './components/About';
import Navigation from './components/Navigation';
import Intro from './components/Intro';

function App() {
  return (
    <div className="App">
     <Navigation />
                <Routes>
                    <Route path="/" element={<Intro />} />
                    <Route path="/about" element={<About />} />
                    {/* <Route path="/projects" element={<Projects />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/contact" element={<Contact />} /> */}
                </Routes>
    </div>
  );
}

export default App;
