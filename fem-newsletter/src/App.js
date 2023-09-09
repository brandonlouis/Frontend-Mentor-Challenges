import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Newsletter from './components/Newsletter';
import Success from './components/Success';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Newsletter />} />
            <Route path="/Success" element={<Success />} />
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
