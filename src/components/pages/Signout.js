import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

function Signout({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleSignout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false); // Set isAuthenticated to false
    navigate('/'); // Redirect to the sign-in page after signing out
  };

  return (
    <div className='signout'>
      <h2>Sign Out</h2>
      <p>Are you sure you want to sign out?</p>
      <button onClick={handleSignout}>Sign Out</button>
    </div>
  );
}

export default Signout;
