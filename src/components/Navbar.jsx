import React from "react";
import PropTypes from "prop-types";
import "./../styles/Navbar.css";

function Navbar({ theme, toggleTheme }) {
  return (
    <header className="navbar">
      <a href="#home" className="logo" aria-label="Go to home">
        Sima Gulestani
      </a>

      <nav role="navigation" aria-label="Main navigation">
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li><a href="#experience">Experience</a>
          </li>

          <li><a href="#education">Education</a>
          </li>

          <li>
            <a href="#publications">Publications</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <button
        type="button"
        className="theme-btn"
        onClick={toggleTheme}
        aria-pressed={theme !== "light"}
        aria-label="Toggle color theme"
        title="Toggle theme"
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </header>
  );
}

Navbar.propTypes = {
  theme: PropTypes.oneOf(["light", "dark"]).isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default Navbar;