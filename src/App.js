import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import React from 'react';
import './App.css';
import About from './components/About/About';
import Navigation from './components/Navigation';
import Intro from './components/Intro/Intro';

function App() {
  return (
    <div className="App">
      <Router>
     <Navigation />
     <Intro/>
        <Routes>
            <Route path="/#" element={<Intro />} />
            <Route path="/#about" element={<About />} />
            {/* <Route path="/projects" element={<Projects />} />
             <Route path="/experience" element={<Experience />} />
             <Route path="/contact" element={<Contact />} /> */}
        </Routes>

        <About /> 
        </Router>
                
    </div>
  );
}

export default App;
