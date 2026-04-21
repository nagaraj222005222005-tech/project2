import React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully! (Dummy form)');
  };

  return (
    <div className="fade-in section container">
      <h1 className="section-title">Contact Me</h1>
      
      <div className="contact-content">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" id="name" className="form-input" placeholder="Your Name" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" className="form-input" placeholder="your.email@example.com" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea id="message" className="form-textarea" placeholder="Your message here..." required></textarea>
          </div>
          
          <button type="submit" className="btn btn-primary submit-btn">
            Send Message
          </button>
        </form>

        <div className="social-links">
          <a href="#" className="social-link" aria-label="GitHub">
            <FaGithub size={20} />
          </a>
          <a href="#" className="social-link" aria-label="LinkedIn">
            <FaLinkedin size={20} />
          </a>
          <a href="#" className="social-link" aria-label="Twitter">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="social-link" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
