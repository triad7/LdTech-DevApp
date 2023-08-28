import React from 'react';
import './Contact.css'; // Import your CSS file for styling

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <div className="contact-left">
          <h2>Contact Us</h2>
          <br />
          <p>
          Use our contact form to get in touch with our team. We're here to answer any questions you have about our Devops automation software and how it can benefit your business.
          </p>
        </div>
        <div className="contact-right">
          <form>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email"/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message"></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
