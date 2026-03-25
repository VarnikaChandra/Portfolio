import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <div className="resume-page">
      <div className="resume-card">
        <header className="resume-header">
          <p className="resume-label">Varnika Chandra Resume</p>
        </header>

        <section className="resume-section">
          <h2>Education</h2>
          <div className="resume-entry">
            <div className="resume-entry-top">
              <h3>University of Michigan</h3>
              <span>Expected May 2026</span>
            </div>
            <p className="resume-subtitle">
              B.S.E. in Computer Science, Minor in User Experience Design
            </p>
            <p>
              Relevant coursework includes data structures and algorithms, web
              systems, databases, UI/UX design, technical communication, and
              software engineering.
            </p>
          </div>
        </section>

        <section className="resume-section">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-group">
              <h3>Languages</h3>
              <p>Python, JavaScript, C++, SQL, HTML, CSS, R</p>
            </div>

            <div className="skill-group">
              <h3>Frameworks & Tools</h3>
              <p>
                React, Node.js, Express, Flask, PostgreSQL, Git, AWS, Figma,
                Mendix, REST APIs
              </p>
            </div>

            <div className="skill-group">
              <h3>Other Areas</h3>
              <p>
                Full-stack development, UI/UX design, data analysis, machine
                learning, technical documentation, accessibility-focused design
              </p>
            </div>
          </div>
        </section>

        <section className="resume-section">
          <h2>Experience</h2>

          <div className="resume-entry">
            <div className="resume-entry-top">
              <h3>Software Developer Intern</h3>
              <span>Siemens Government Technologies</span>
            </div>
            <p className="resume-subtitle">Summer Internship</p>
            <p>
              Built internal Mendix applications to streamline workflows and
              support innovation initiatives. Focused on designing practical,
              user-centered tools that improved process visibility and team
              collaboration.
            </p>
          </div>

          <div className="resume-entry">
            <div className="resume-entry-top">
              <h3>Python Instructor</h3>
              <span>Juni Learning</span>
            </div>
            <p className="resume-subtitle">Part-time</p>
            <p>
              Teach students Python programming and computational thinking
              through project-based learning. Guide learners through coding
              concepts, debugging, and problem-solving in a clear and engaging
              way.
            </p>
          </div>

          <div className="resume-entry">
            <div className="resume-entry-top">
              <h3>Student Temp</h3>
              <span>University of Michigan Environmental Health Sciences</span>
            </div>
            <p className="resume-subtitle">Part-time</p>
            <p>
              Support department operations through website updates, digital
              content creation, alumni tracking, resource maintenance, and
              technical assistance. Also help configure software and devices for
              department use.
            </p>
          </div>
        </section>

        <section className="resume-section">
          <h2>Projects</h2>

          <div className="resume-entry">
            <div className="resume-entry-top">
              <h3>Personal Finance Manager Web Application</h3>
              <a
                href="/projects"
                className="resume-link"
              >
                View in Portfolio
              </a>
            </div>
            <p>
              Developed a full-stack application to help users track income,
              expenses, and budgets through a centralized dashboard. Designed
              the project to combine strong backend functionality with a clean
              and accessible interface.
            </p>
          </div>

          <div className="resume-entry">
            <div className="resume-entry-top">
              <h3>Instagram Clone</h3>
              <a
                href="/projects"
                className="resume-link"
              >
                View in Portfolio
              </a>
            </div>
            <p>
              Built a social media web application with dynamic feeds, likes,
              comments, and infinite scrolling. Strengthened experience with
              React, asynchronous updates, REST APIs, and deployment workflows.
            </p>
          </div>

          <div className="resume-entry">
            <div className="resume-entry-top">
              <h3>Coffee Review Analysis and Prediction Model</h3>
              <a
                href="/projects"
                className="resume-link"
              >
                View in Portfolio
              </a>
            </div>
            <p>
              Cleaned and analyzed coffee review data using Python and machine
              learning techniques to identify key patterns and predict ratings.
              Combined data preprocessing, feature engineering, model building,
              and visualization.
            </p>
          </div>
        </section>

        <section className="resume-section">
          <h2>Leadership & Involvement</h2>

          <div className="resume-entry">
            <div className="resume-entry-top">
              <h3>Captain and Choreographer</h3>
              <span>Michigan Wolveraas</span>
            </div>
            <p>
              Help lead a competitive collegiate raas/garba dance team through
              choreography, planning, team coordination, and performance
              preparation. This role has strengthened communication, leadership,
              and creative problem-solving skills.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Resume;