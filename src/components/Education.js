import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="section">
      <h2 className="education-header">Education</h2>
      <div className="education-content">
        <div className="school"> 
        <h3 className="education-school">University of Michigan</h3>
          <img src="https://varnikachandra.github.io/Portfolio/images/michigan.jpeg" alt="University of Michigan" className="education-logo"/>
          <p className="education-degree">B.S.E Computer Science</p>
          <p className="education-graduation">Graduating May 2026</p>
          <div className="education-activities">
            <h4>Activities:</h4>
            <ul>
           <li> Captain of Michigan Wolveraas</li>
            <li>Co-Founder of Fearless Flow Foundation</li>
            <li>Python Instructor at Juni Learning</li>
            </ul>
            </div>
        </div>
        <div className="details">
          <div className="languages">
            <h4>Languages</h4>
            <div className="detail-item">C/C#/C++</div>
            <div className="detail-item">Python</div>
            <div className="detail-item">Java</div>
            <div className="detail-item">HTML, CSS, JavaScript</div>
            <div className="detail-item">Matlab</div>
            <div className="detail-item">SQL</div>
            <div className="detail-item">Linux</div>
          </div>
          <div className="coursework">
            <h4>Related Coursework</h4>
            <div className="detail-item">Data Structures & Algorithms</div>
            <div className="detail-item">Discrete Mathematics</div>
            <div className="detail-item">Web Systems</div>
            <div className="detail-item">Computer Organization</div>
            <div className="detail-item">Foundations of Computer Science</div>
            <div className="detail-item">Django Web Applications</div>
            <div className="detail-item">User Needs & Usability Evaluation</div>
            <div className="detail-item">Database Systems</div>
          </div>
          <div className="frameworks">
            <h4>Frameworks</h4>
            <div className="detail-item">React</div>
            <div className="detail-item">Node.js</div>
            <div className="detail-item">Express</div>
            <div className="detail-item">Django</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
