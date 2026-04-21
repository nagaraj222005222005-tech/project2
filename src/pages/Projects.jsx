import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with cart functionality, secure checkout, and user authentication. Built with React and Node.js.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity application allowing users to organize tasks, set deadlines, and track progress using a Kanban board interface.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A dynamic weather application providing real-time forecasts, interactive maps, and detailed climate data using external APIs.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      title: 'Social Media App',
      description: 'A social networking platform featuring user profiles, real-time messaging, and media sharing capabilities.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 5,
      title: 'Fitness Tracker',
      description: 'A mobile-responsive web app to log workouts, monitor nutrition, and visualize fitness goals over time.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 6,
      title: 'Blog CMS',
      description: 'A content management system for bloggers to create, edit, and publish articles with rich text formatting.',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    }
  ];

  return (
    <div className="fade-in section container">
      <h1 className="section-title">My Projects</h1>
      
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                <a href="#" className="btn btn-primary" style={{ flex: 1, padding: '0.5rem' }}>
                  <ExternalLink size={16} style={{ marginRight: '6px' }} /> Live Demo
                </a>
                <a href="#" className="btn btn-outline" style={{ flex: 1, padding: '0.5rem' }}>
                  <FaGithub size={16} style={{ marginRight: '6px' }} /> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
