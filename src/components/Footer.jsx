import React from "react";
import "../styles/Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      <h3>Sima Gulestani</h3>

      <div className="footer-links">

        <a
          href="https://github.com/Simagulestani"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Sima Gulestani on GitHub"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/simagulestani/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Sima Gulestani on LinkedIn"
        >
          LinkedIn
        </a>

      </div>

      <p>
        © {year} All Rights Reserved
      </p>

    </footer>
  );
}

export default Footer;