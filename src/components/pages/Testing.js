import React, { useState } from 'react';
import axios from 'axios';

const Testing = () => {
  const [projects, setProjects] = useState([]);
  const [issues, setIssues] = useState([]);

  const backendUrl = 'http://localhost:5000/api/projects';
  const backendUrlIssues = 'http://localhost:5000/api/issues';

  const fetchProjects = async () => {
    try {
      const response = await axios.get(backendUrl);
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
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

  return (
    <>
      <div>
        <h1>Fetch all the Projects</h1>
        <button onClick={fetchProjects}>Projects</button>
        <button onClick={fetchIssues}>Issues</button>
      </div>
      <div>
        <h2>Projects:</h2>
        <ul>
          {projects.map((project) => (
            <li key={project.key}>
              {project.name}
              {project.lastAnalysisDate && (
                <span> - Last Analysis Date: {project.lastAnalysisDate}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Issues:</h2>
        <ul>
          {issues.map((issue, index) => (
            <li key={index}>
              <strong>Effort:</strong> {issue.effort},
              <strong>Date:</strong> {issue.date},
              <strong>Author:</strong> {issue.author}
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
