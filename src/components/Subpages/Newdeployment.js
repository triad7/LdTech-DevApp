import React from 'react';
import '../Subpages/Newdeployment.css';

export default function Newdeployment() {
  return (
    <>
      <div className='newdeploy-page'>
        <table className='newdeploy-table'>
          <tbody>
            <tr>
              <td><label htmlFor='name'>Name:</label></td>
              <td><input type='text' /></td>
            </tr>
            <tr>
              <td><label htmlFor='style'>Style:</label></td>
              <td>
              <select id='style'>
                  <option value='default' selected>Select</option>
                  <option value='option1'>Pipeline</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label htmlFor='url'>Build Trigger:</label></td>
              <td>
              <select id='style'>
                  <option value='default' selected>Select</option>
                  <option value='option1'>GitHub Hook</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label htmlFor='pipeline'>Pipeline:</label></td>
              <td>
              <select id='style'>
                  <option value='default' selected>Select</option>
                  <option value='option1'>Pipeline Script From SCM</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label htmlFor='scm'>SCM:</label></td>
              <td><input type='text' /></td>
            </tr>
            <tr>
              <td><label htmlFor='repourl'>Repository URL:</label></td>
              <td><input type='text' /></td>
            </tr>
            <tr>
              <td><label htmlFor='branch'>Branch:</label></td>
              <td><input type='text' /></td>
            </tr>
            <tr>
              <td><label htmlFor='scriptPath'>Script Path:</label></td>
              <td><input type='text' /></td>
            </tr>
          </tbody>
        </table>
        <div>
          <button>Save</button>
          <button>Apply</button>
        </div>
      </div>
    </>
  );
}
