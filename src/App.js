import React, {useState, useEffect} from 'react';
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
import Signin from './components/pages/Signin';
import Signup from './components/Subpages/Signup';
import Signout from './components/pages/Signout';



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  
  // Check authentication status on app initialization
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deployment" element={<Deployments />} />
        <Route path="/cijobs" element={<Cijobs />} />
        <Route path="/github" element={<Github />} />
        <Route path="/history" element={<History />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/contact" element={<Maincontact />} />
        <Route path="/signin" element={<Signin setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signout" element={<Signout setIsAuthenticated={setIsAuthenticated} />} />
      </Routes>
    </Router>
  );
}

export default App;