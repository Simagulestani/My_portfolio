import React from "react";
import "../styles/Hero.css";
import heroImage from "../assets/Profile.png";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <div className="hero-avatar">
          <img
            src={heroImage}
            alt="Sima Gulestani"
            loading="lazy"
          />
        </div>

        <div className="hero-copy">
          <h1>Sima Gulestani</h1>
          <p className="hero-role">Software Engineer</p>

          <p className="hero-description">
            Results-driven Software Developer with hands-on experience in
            full-stack web development, focusing on Laravel, React, and modern
            JavaScript frameworks.
          </p>

          <div className="hero-actions">
            <a
              href="https://github.com/Simagulestani"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn hero-btn-primary"
            >
              GitHub
            </a>

            <a
              href="/assets/CV - Sima Gulestani (1).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn hero-btn-secondary"
              download
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;