import React from 'react';
import './FlipCard.css';

const FlipCard = ({ project }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h3>{project.title}</h3>
          <p>{project.shortDescription}</p>
        </div>
        <div className="flip-card-back">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
