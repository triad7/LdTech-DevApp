
import React, { useState } from 'react';
import { Testmenuitems } from './Testmenuitems';
import './TestDropdown.css';
import { Link } from 'react-router-dom';

function TestDropdown() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {Testmenuitems.map((item, index) => {
          return (
            <li key={index}>
              {/* Check if the path starts with 'http' or 'https' to determine if it's an external link */}
              {item.path.startsWith('http') || item.path.startsWith('https') ? (
                <a
                  className={item.cName}
                  href={item.path}
                  target="_blank" 
                  rel="noopener noreferrer" // Recommended for security
                >
                  {item.title}
                </a>
              ) : (
                <Link
                  className={item.cName}
                  to={item.path}
                  onClick={() => setClick(false)}
                >
                  {item.title}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default TestDropdown;
