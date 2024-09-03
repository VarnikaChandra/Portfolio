import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <div className="nav-item-box">
          <li className="header-name">Varnika Chandra</li>
          <li>
            <a href="mailto:varnikac@umich.edu" className="icon-link">
              <i className="fas fa-envelope"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/VarnikaChandra" target="_blank" rel="noopener noreferrer" className="icon-link">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/varnika-chandra-abb97724a/" target="_blank" rel="noopener noreferrer" className="icon-link">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

