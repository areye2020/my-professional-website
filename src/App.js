import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use 'Routes' instead of 'Switch'
import Home from './components/Home/Home';
import Journey from './components/Journey/Journey';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import NavBar from './components/NavBar/NavBar'; // Import the NavBar component
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navigation Bar */}
        <NavBar />

        {/* Route Definitions */}
        <Routes> {/* Use 'Routes' instead of 'Switch' */}
          <Route path="/" element={<Home />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
