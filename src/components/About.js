import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import "./About.css";
import schoolPic from "./school_pic.jpeg";

function About() {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["developer.", "intern.","engineer.", "student.", "designer."],
      typeSpeed: 60,
      backSpeed: 35,
      backDelay: 1400,
      startDelay: 300,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="about-page">
      <div className="about-card">
        <img
          src={schoolPic}
          alt="Portrait of Varnika Chandra"
          className="about-image"
        />

        <div className="about-text">
          <h1>
            Hi, I’m Varnika, a{" "}
            <span ref={typedElement} className="typed-word"></span>
          </h1>

          <p className="about-subtitle">
            Computer Science student at the University of Michigan focused on
            building thoughtful, user-centered digital experiences.
          </p>

          <p>
            I’m a fourth-year Computer Science student pursuing a minor in User
            Experience Design. I’m interested in software development,
            full-stack applications, and creating technology that is both
            functional and intuitive. Outside of academics, I enjoy dance,
            reading, and bringing creativity into the way I approach design and
            problem-solving.
          </p>

          <div className="about-buttons">
            <Link to="/projects" className="secondary-btn">View Projects</Link>
            <Link to="/resume" className="secondary-btn">View Resume</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;