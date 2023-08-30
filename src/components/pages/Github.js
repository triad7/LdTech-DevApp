import React, { useState } from 'react';
import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faShare, faSave, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faGithub as fabGithub } from '@fortawesome/free-brands-svg-icons';



export default function Github() {
  const [username, setUsername] = useState('');
  const [repo, setRepo] = useState('');
  const [url, setUrl] = useState('');
  const [branch, setBranch] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleDeleteClick = () => {
    setUsername('');
    setRepo('');
    setUrl('');
    setBranch('');
  };

  return (
    <>
    <div className='github-page'>
      <div className='github-header'>
        <FontAwesomeIcon icon={fabGithub} className='github-icon' />
        <h1 className='github-title'>
          GitHub &gt; {username ? <span>{username}</span> : 'New'}
        </h1>
      </div>
      <table className='github-form'>
        <tbody>
          <tr>
            <td><label htmlFor='name'>User Name:</label></td>
            <td><input type='text' id='name' value={username} onChange={handleUsernameChange} /></td>
          </tr>
          <tr>
            <td><label htmlFor='repo'>Repo Name:</label></td>
            <td><input type='text' id='repo' value={repo} onChange={(e) => setRepo(e.target.value)} /></td>
          </tr>
          <tr>
            <td><label htmlFor='url'>Repo URL:</label></td>
            <td><input type='text' id='url' value={url} onChange={(e) => setUrl(e.target.value)} /></td>
          </tr>
          <tr>
            <td><label htmlFor='branch'>Branch:</label></td>
            <td><input type='text' id='branch' value={branch} onChange={(e) => setBranch(e.target.value)} /></td>
          </tr>
        </tbody>
      </table>
      <div className='button-group'>
        <button className='authorize-button'>
          <FontAwesomeIcon icon={faLock} className='auth-icon' />
          Authorize
        </button>
        <button className='delete-button' onClick={handleDeleteClick}>
          <FontAwesomeIcon icon={faTrash} className='delete-icon' />
          Delete
        </button>
        <button className='save-button'>
          <FontAwesomeIcon icon={faSave} className='save-icon' />
          Save
        </button>
        <button className='share-button'>
          <FontAwesomeIcon icon={faShare} className='share-icon' />
          Share
        </button>
        <button className='test-connection-button'>
          <FontAwesomeIcon icon={faCheck} className='test-icon' />
          Test Connection
        </button>
      </div>
    </div>
    </>
  );
}
