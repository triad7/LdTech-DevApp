import './cijob.css';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


export default function Cijobs() {
  const [data, setData] = useState([]);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(''); 

  useEffect(() => {
    // Fetch data from your API here and update the 'data' state.
    // Example API call:
    fetch('https://api.example.com/github-repos')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

   // Filter the data based on the search term
   const filteredData = data.filter((repo) =>
   repo.repoName.toLowerCase().includes(searchTerm.toLowerCase())
 );

 
 const dataToDisplay = filteredData.slice(startIndex, endIndex);

  return (
    <div className='maincijob'>
        <div className="search-container">
        <p>Repo Serch</p>
        <input
          type="text"
          placeholder="Search Repo name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>
      
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Repo Name</th>
            <th>Repo URL</th>
            <th>Owner</th>
            <th>Last Status</th>
            <th>Last Modified</th>
          </tr>
        </thead>
        <tbody>
          {dataToDisplay.map((repo) => (
            <tr key={repo.id}>
              <td>{repo.username}</td>
              <td>{repo.repoName}</td>
              <td>{repo.stats}</td>
              <td>{repo.lastModified}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination-buttons">
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={endIndex >= data.length}>
          Next
        </button>
      </div>
    </div>

    </div>

   
  );
}
