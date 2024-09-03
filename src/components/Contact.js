// src/components/Contact.js
import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>
      <h3>Fill out this form our checkout my Github, Linkden, or email linked in the header!</h3>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
