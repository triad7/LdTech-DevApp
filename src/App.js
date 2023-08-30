import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Deployments from './components/pages/Deployments';
import Cijobs from './components/pages/Cijobs';
import Github from './components/pages/Github';
import History from './components/pages/History';
import Testing from './components/pages/Testing';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Maincontact from './components/pages/Maincontact';




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deployment" element={<Deployments />} />
        <Route path="/cijobs" element={<Cijobs />} />
        <Route path="/github" element={<Github />} />
        <Route path="/history" element={<History />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/contact" element={<Maincontact />} />
      </Routes>
    </Router>
  );
}

export default App;
