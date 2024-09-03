// src/components/About.js
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './About.css';

function About() {
  const typedElement = useRef(null);

  useEffect(() => {
    if (typedElement.current) {
      const options = {
        strings: ["Hi, I'm Varnika!"],
        typeSpeed: 50,
        backSpeed: 25,
        loop: false,
        fadeOut:true,
        backDelay:1500,
        startDelay:500,
        smartBackspace:true, /* only backspaces what does not match*/ 
        /*cursor stuff*/
        showCursor: false,
        cursorChar: '...',
      };

      const typed = new Typed(typedElement.current, options);

      // Destroy Typed instance during cleanup to stop animation if component unmounts
      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <section id="about" className="section">
      <div className="about-content">
        <div className="about-image">
          <img src="https://varnikachandra.github.io/Portfolio/images/school_pic.jpeg" alt="Varnika Chandra" />
        </div>
        <div className="about-text">
          <h2 id="typed-output" ref={typedElement}>...</h2>
          <p>
             I am a third-year student at the University of Michigan studying Computer Science with a minor in User Experience and Design.
            I am looking to pursue a career in Software Development. 
            Outside of school, I love to dance and read in my free time! Thank you for visiting my page :)
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
