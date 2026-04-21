import React from 'react';

const About = () => {
  const skills = [
    'HTML5', 'CSS3', 'JavaScript', 'React.js', 
    'Node.js', 'Express', 'MongoDB', 'Tailwind CSS',
    'Git', 'TypeScript', 'Next.js', 'Figma'
  ];

  return (
    <div className="fade-in section container">
      <h1 className="section-title">About Me</h1>
      
      <div className="about-content">
        <div>
          <img 
            src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Sundar" 
            className="about-image"
          />
        </div>
        
        <div className="about-text">
          <h2>Get to know me!</h2>
          <p>
            Hello! I'm Sundar, a dedicated and creative Full Stack Developer with a strong passion for building web applications that are both visually stunning and highly functional. 
          </p>
          <p>
            With a background in both front-end and back-end technologies, I enjoy the complete lifecycle of bringing an idea to life—from the initial design phase to deployment. I am constantly learning and adapting to new technologies to deliver the best possible solutions.
          </p>
          <p>
            When I'm not coding, you can find me exploring new design trends, reading tech blogs, or enjoying a good cup of coffee.
          </p>
          
          <h3 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>My Skills</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
