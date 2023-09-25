
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import '../../App.css';

function Signin({ setIsAuthenticated }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const resetPassword = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/auth/signin', {
        username,
        password,
      });

      localStorage.setItem('token', response.data.token);
      setIsAuthenticated(true); // Set isAuthenticated to true
      navigate('/'); // Redirect to home page after login
    } catch (error) {
      setError('Invalid username or password');
      console.error(error);
    }
  };
    const handleResetPassword = () => {
      resetPassword('/resetpassword');
    }


  return (
    <div  className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
      <h2 style={{textAlign:"center"}}>Login</h2>
      {error && <div className="error-message" style={{color:'red'}}>{error}</div>} 
      <br />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      
        <button type="submit" style={{margin:'auto'}}>Login</button>
        <p className='para'>
        Don't have an account? <Link to="/signup" className="hp">SignUp</Link>
      </p>
        <p className='para'>
        Forgot Password?  <Link to="/resetpassword" className='hp' onClick={handleResetPassword}>Reset Password</Link>
        </p>
      
      </form>
    </div>
  );
}

export default Signin;



