import React from "react";
import "./Projects.css";

import giftImg from "./giftgenius.jpeg";
import Img388 from "./388.jpeg";
//import financeImg from "./finance_project.png";
//import instaImg from "./instagram_project.png";
//import coffeeImg from "./coffee_project.png";
//import hinglishImg from "./hinglish_project.png";
import danceImg from "./dance_project.jpeg";

const Projects = () => {
  const projects = [
    {
      title: "Gift Genius",
      summary:
        "An AI-powered gift recommendation tool that generates thoughtful gift ideas based on user preferences, relationships, occasions, and budget constraints.",
      skills: ["Next.js", "React", "OpenAI API", "UX Design"],
      image: giftImg,
      link: "https://nextjs-ai-chatbot-ashen-eight-uxyudiy4c4.vercel.app/",
    },
    {
      title: "Healthy Recipe Analysis",
      summary:
        "Analyzed large-scale recipe and user review data to explore what factors influence whether a recipe is labeled as healthy.",
        skills: ["Python", "Pandas", "Scikit-learn", "Data Analysis", "Machine Learning"],
        image:Img388,
      link: "https://varnikachandra.github.io/Healthy-Recipe-Analysis/"
    },
    {
      title: "Exploring Indian Dance",
      summary:
        "An educational website introducing different styles of Indian dance while highlighting their cultural significance and artistic history.",
      skills: ["HTML", "CSS", "JavaScript"],
      image: danceImg,
      link: "https://github.com/VarnikaChandra/Exploring_indian_dance",
    },
/*
  
    {
      title: "PERN Finance Tracker",
      summary:
        "A full-stack finance tracker designed to help users manage income, expenses, and budgets through a centralized dashboard and intuitive data organization.",
      skills: ["PostgreSQL", "Express", "React", "Node.js"],
      //image: financeImg,
      link: "",
    },
    {
      title: "Instagram Clone",
      summary:
        "A full-stack social media application with dynamic feeds, likes, comments, and infinite scrolling, built to strengthen experience with REST APIs and client-side updates.",
      skills: ["React", "Flask", "REST API", "AWS"],
      //image: instaImg,
      link: "https://github.com/VarnikaChandra/p3-insta485-clientside",
    },
    {
      title: "Coffee Consumption Data Analysis",
      summary:
        "A data analysis and machine learning project exploring coffee review patterns, feature relationships, and predictive modeling for ratings.",
      skills: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
      //image: coffeeImg,
      link: "",
    },
    {
      title: "Hinglish Translator",
      summary:
        "A web application that translates English text into Hinglish, reflecting the hybrid language style commonly used in everyday messaging.",
      skills: ["React", "JavaScript", "HTML", "CSS"],
      //image: hinglishImg,
      link: "https://github.com/VarnikaChandra/Hinglish-Translator",
    },*/
  ];

  return (
    <div className="projects-page">
      <div className="projects-card">
        <header className="projects-header">
          <p className="projects-label">Portfolio</p>
          <h1>Selected Projects</h1>
          <p className="projects-intro">
            This portfolio highlights projects that reflect my experience across
            software development, data analysis, and user-focused design. These
            projects showcase a range of skills including full-stack
            development, machine learning, API integration, and frontend
            interface design.
          </p>
        </header>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={index}>
              <img
                src={project.image}
                alt={`Screenshot for ${project.title}`}
                className="project-image"
              />

              <div className="project-body">
                <h2>{project.title}</h2>
                <p className="project-summary">{project.summary}</p>

                <div className="project-tags">
                  {project.skills.map((skill, i) => (
                    <span className="project-tag" key={i}>
                      {skill}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    View Project
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;