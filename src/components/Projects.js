import React from 'react';
import FlipCard from './FlipCard';


const Projects = () => {
  const projects = [
    {
      title: "Hinglish Translator",
      shortDescription: "Hinglish a combination of Hindi and English commonly used in messaging amongst Hindi speakers.",
      description: "React/HTML/JavaScript/CSS",
      link: ""
    },
    {
      title: "Exploring Indian Dance",
      shortDescription: "A website featuring various styles of Indian dance forms with information about cultural heritage.",
      description: "HMTL/CSS/JavaScript",
      link: "https://github.com/VarnikaChandra/Exploring_indian_dance"
    },
    {
      title: "Analyzing Coffee Consumption in the US",
      shortDescription: "Short description of Project 3.",
      description: "Python",
      link: "https://github.com/yourusername/project2"
    }
   

    // Add more projects as needed
  ];

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <FlipCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

