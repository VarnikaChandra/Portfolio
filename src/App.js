import React, { useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import './style.css'; // Global styles
import './components/Header.css'; // Header styles
import './components/About.css'; // About section styles
import './components/Projects.css';
import './components/Education.css';
import './App.css';

const App = () => {
    useEffect(() => {
        const sections = document.querySelectorAll('.section');
        const navLinks = document.querySelectorAll('nav ul li a');

        const handleScroll = () => {
            let current = '';

            sections.forEach((section, index) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                const nextSectionTop = index < sections.length - 1 ? sections[index + 1].offsetTop : document.body.scrollHeight;

                if (window.scrollY >= sectionTop - sectionHeight / 3 && window.scrollY < nextSectionTop - sectionHeight / 3) {
                    current = section.getAttribute('id');
                }

                // Fallback for the last section
                if (index === sections.length - 1 && window.scrollY + window.innerHeight >= document.body.scrollHeight) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <Header />
            <About />
            <Education />
            <Projects />
            <Contact />
        </div>
    );
};

export default App;
