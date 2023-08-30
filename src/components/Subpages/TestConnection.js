import React, { useState } from 'react';
import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faGithub as fabGithub } from '@fortawesome/free-brands-svg-icons';



export default function TestConnection() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleDeleteClick = () => {
    setUsername('');
    setPassword('');
  };

  return (
    <>
    <div className='github-page'>
      <div className='github-header'>
        <FontAwesomeIcon icon={fabGithub} className='github-icon' />
        <h1 className='github-title'>
          GitHub &gt; {username ? <span>{username}</span> : 'Autenticate'}
        </h1>
      </div>
      <table className='github-form'>
        <tbody>
          <tr>
            <td><label htmlFor='name'>User Name:</label></td>
            <td><input type='text' id='name' value={username} onChange={handleUsernameChange} /></td>
          </tr>
          <tr>
            <td><label htmlFor='password'>Password:</label></td>
            <td><input type='text' id='password' value={password} onChange={(e) => setPassword(e.target.value)} /></td>
          </tr>
        </tbody>
      </table>
      <div className='button-group'>
        <button className='test-connection-button'>
          <FontAwesomeIcon icon={faCheck} className='test-icon' />
          Test Connection
        </button>
        <button className='delete-button' onClick={handleDeleteClick}>
          <FontAwesomeIcon icon={faTrash} className='delete-icon' />
          Delete
        </button>
      </div>
    </div>
    </>
  );
}
