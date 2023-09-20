import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { faSearch, faBug} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../App.css';

const Testing = () => {
  const [projects, setProjects] = useState([]);
  const [issues, setIssues] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('ascending'); // Default sort order
  const [bugsData, setBugsData] = useState([]); // State to store bug data

  const backendUrl = 'http://localhost:5000/api/projects';
  const backendUrlIssues = 'http://localhost:5000/api/issues';

  const fetchProjects = async () => {
    try {
      // Fetch project data
      const projectsResponse = await axios.get(backendUrl);
      setProjects(projectsResponse.data);

      // Fetch bug data
      const bugsResponse = await axios.get('http://localhost:5000/api/bugs');
      setBugsData(bugsResponse.data.projects);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchIssues = async () => {
    try {
      const response = await axios.get(backendUrlIssues);
      setIssues(response.data);
    } catch (error) {
      console.error('Error fetching issues:', error);
    }
  };

  // Function to filter and sort projects based on the search query and sort order
  const filteredProjects = projects
    .filter((project) =>
      project.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === 'ascending') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

  // Calculate the number of projects and format lastAnalysisDates
  useEffect(() => {
    return () => {
      // Cleanup: Cancel any ongoing axios requests when the component unmounts
      axios.CancelToken.source().cancel('Request canceled');
    };
  }, []);

  const formatLastAnalysis = (lastAnalysisDate) => {
    const now = new Date();
    const analysisDate = new Date(lastAnalysisDate);
    const timeDifference = Math.floor((now - analysisDate) / (1000 * 60)); // Calculate time difference in minutes

    if (timeDifference < 1) {
      return 'Last analysis: less than a minute ago';
    } else if (timeDifference < 60) {
      return `Last analysis: ${timeDifference} minutes ago`;
    } else if (timeDifference < 1440) {
      const hours = Math.floor(timeDifference / 60);
      return `Last analysis: ${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
    } else {
      const days = Math.floor(timeDifference / 1440);
      return `Last analysis: ${days} ${days === 1 ? 'day' : 'days'} ago`;
    }
  };

  const createProjectDivs = () => {
    return filteredProjects.map((project, index) => (
      <div key={project.key} className="project-div">
        <div className="project-info">
          <div className="project-name">{project.name}</div>
          <div className="bugs">
          <FontAwesomeIcon icon={faBug} className="bug-icon" style={{ color: 'black',  marginRight: '5px' }} />
            Bugs: {getBugCountForProject(project.key)}</div>
        </div>
        {project.lastAnalysisDate && (
          <div className="last-analysis">
            {formatLastAnalysis(project.lastAnalysisDate)}
          </div>
        )}
      </div>
    ));
  };
  
  

  // Function to get the bug count for a specific project
  const getBugCountForProject = (projectKey) => {
    const bugInfo = bugsData.find((bug) => bug.projectKey === projectKey);
    return bugInfo ? bugInfo.bugs : 0;
  };

  return (
    <>
      <div className="search-container">
        <p>Project Search</p>
        <input
          type="text"
          placeholder="Search project name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>

      <div className="prosort">
        <p>Projects: <span>{filteredProjects.length}</span></p>
        <p>SortBy:</p>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>

      <div className='proisBtn'>
        <button onClick={fetchProjects}>Projects</button>
      </div>
      <div className="project-container">
        {createProjectDivs()}
      </div>
      <div>
        <button onClick={fetchIssues}>Issues</button>
        <h2>Issues:</h2>
        <ul>
          {issues.map((issue, index) => (
            <li key={index}>
              <strong>Effort:</strong> {issue.effort},
              <strong>Date:</strong> {issue.date},
              <strong>Author:</strong> {issue.author},
              <br />
              <strong>Message:</strong> {issue.message}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Testing;
