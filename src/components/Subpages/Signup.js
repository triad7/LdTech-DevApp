import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../App.css';

const Signup = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/auth/signup', {
        username,
        email,
        password,
      });

      alert('User created successfully');
    } catch (error) {
<<<<<<< HEAD
      console.log(error);
=======
      console.error(error);
>>>>>>> 4ddd17cb780d15bdd906d6e6be14791fd33f399d
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSignup}>
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
        <p>
          Already have an account?{' '}
          <Link to="/signin" className="hp">
            LogIn
          </Link>
        </p>
      </form>
    </div>
  );
};

<<<<<<< HEAD
export default Signup;
=======
export default Signup;
>>>>>>> 4ddd17cb780d15bdd906d6e6be14791fd33f399d
