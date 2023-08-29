import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

export default function Deployments() {
  return (
    <div className='deployments-page'>
      <div className='deployment-header'>
        <div className='deployment-title'>
          <FontAwesomeIcon icon={faArrowAltCircleUp} className='deployment-icon' />
          Deployments
        </div>
        <div className='new-deployment'>
        <FontAwesomeIcon icon={faPlusCircle} className='plus-icon' /> &nbsp; New Deployment
        </div>
      </div>
      <div className='deployment-content'>
      <h2 className='deployments'>Thank's for Trying us out !!!</h2> <br/><br />
      <p className='paragraph'>You are minutes away from an awesome Salesforce deployment experience</p>
      <p className='paragraph'>To get strted, please add one or more organization that you would like to deploy to or from. This can be done via GitHub > Add GitHub</p>
      <p className='paragraph'>Once you have at least two organizations, you can create your first deployment by navigating to Deployments > New Deployments</p>
      <p className='paragraph'>We aim to make your Salesforce deployment as effortless as possible and would to love to hear your feedback. </p>
      <p className='paragraph'>Please feel free to email us at <span>hr@ldtech.com </span> </p>
      <div className='deployment-btn'>
        <Link to='/contact'>
        <button>Contact-Us</button>
        </Link>
      </div>
      </div>
     
    </div>
  );
}
