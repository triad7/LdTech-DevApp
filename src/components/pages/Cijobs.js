import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../../App.css';

const Cijobs = () => {
  const [repoData, setRepoData] = useState([]); // Store repository data
  const [sortedData, setSortedData] = useState([]); // Store sorted repository data
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [reposPerPage] = useState(5); // Number of repositories per page

  // Sample repository data (replace with your actual data)
  const sampleData = [
    {
      name: 'Repo 1',
      owner: 'Owner 1',
      url: 'https://github.com/repo1',
      branch: 'main',
      lastModified: '2023-09-14',
    },
    // Add more repository objects here
  ];

  useEffect(() => {
    // You can fetch data from an API or set your data here
    // For now, we'll use sample data
    setRepoData(sampleData);
  }, []);

  // Calculate the index of the last repository on the current page
  const indexOfLastRepo = currentPage * reposPerPage;
  // Calculate the index of the first repository on the current page
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  // Get the repositories for the current page
  const currentRepos = sortedData.slice(indexOfFirstRepo, indexOfLastRepo);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='main-cijob'>
      <div className="search-container">
        <p>Repo Search</p>
        <input type="text" placeholder="Search Repo name" />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>
      <table>
        <thead>
          <tr>
            <th>RepoName</th>
            <th>Owner</th>
            <th>URL</th>
            <th>Branch</th>
            <th>LastModified</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {currentRepos.map((repo, index) => (
            <tr key={index}>
              <td>{repo.name}</td>
              <td>{repo.owner}</td>
              <td><a href={repo.url} target="_blank" rel="noopener noreferrer">{repo.url}</a></td>
              <td>{repo.branch}</td>
              <td>{repo.lastModified}</td>
              <td>
                <button>Delete</button>
              </td>
              <td>
                <button>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          Prev
        </button>
        {Array.from({ length: Math.ceil(sortedData.length / reposPerPage) }).map((_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>{index + 1}</button>
        ))}
        <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(sortedData.length / reposPerPage)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Cijobs;
