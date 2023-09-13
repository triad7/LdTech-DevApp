import React, { useState } from 'react';
import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faGithub as fabGithub } from '@fortawesome/free-brands-svg-icons';

export default function TestConnection() {
  const [username, setUsername] = useState('');

  const handleTestConnectionClick = () => {

    // Redirect to the authentication URL
    window.location.href = 'http://localhost:8000/api/auth';
  };

  const handleDeleteClick = () => {
    setUsername('');
  };

  return (
    <>
      <div className='github-page'>
        <div className='github-header'>
          <FontAwesomeIcon icon={fabGithub} className='github-icon' />
          <h1 className='github-title'>
            GitHub &gt; {username ? <span>{username}</span> : 'Authenticate'}
          </h1>
        </div>

        <div className='button-group'>
          <button className='test-connection-button' onClick={handleTestConnectionClick}>
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
