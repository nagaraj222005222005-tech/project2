import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';

const Home = () => {
  return (
    <div className="fade-in">
      <section className="hero-section container">
        <div className="hero-content">
          <span className="hero-greeting">Hi there, I'm</span>
          <h1 className="hero-title">Sundar</h1>
          <p className="hero-subtitle">
            A passionate Full Stack Developer crafting beautiful and functional digital experiences.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">
              View Projects <ArrowRight size={18} className="ml-2" style={{ marginLeft: '8px' }} />
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact Me <Mail size={18} className="ml-2" style={{ marginLeft: '8px' }} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
