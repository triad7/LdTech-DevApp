
import React from 'react';
import './Location.css';

export default function Location() {
  return(
      <>
      <div className='location'>
      <iframe
      title="Map of Our Business Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.8146798281764!2d85.80514487436794!3d20.349273110771076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190943ee841b71%3A0xa1eadbc7c6c0a258!2sLDTECH!5e0!3m2!1sen!2sin!4v1693372179129!5m2!1sen!2sin" 
      width="100%"
      height="350"
      style={{ border: "0" }}
      allowfullscreen=""
     referrerpolicy="no-referrer-when-downgrade">
     </iframe>
        
      </div>
   

      </>
  );
}