import "../styles/Home.css";
import heroImage from "../assets/Profile.png";
import resumePDF from "../assets/CV - Sima Gulestani (1).pdf";

function Home() {
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
          <p className="hero-role"></p>

          <p className="hero-description">
            Full-Stack developer with hands-on experience in web development, focusing on React, and modern
            JavaScript frameworks.
          </p>

          <div className="hero-actions">
            <a
              href="https://github.com/Simagulestani"
              target="github profile"
              className="hero-btn hero-btn-primary"
            >
              GitHub
            </a>

            <a
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn hero-btn-secondary"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;