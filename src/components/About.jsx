import React, { useState } from "react";
import "../styles/About.css";

function About() {
  const [showMore, setShowMore] = useState(false);
   

  return (
    <section id="about" className="about">

      <h2>About Me</h2>

      <div className="about-container">

        {/* accessible avatar as a button */}
        <button
          type="button"
          className="avatar"
          aria-label="Change mood"
        >
          
        </button>

        <div className="about-content">

          <p>
            I am a Business Administration student with a strong
            passion for software development and modern web technologies.
            I enjoy building applications that solve real-world problems
            and improve user experiences.
          </p>

          {showMore && (
            <p>
              My technical skills include React, Java, Laravel,
              MySQL, HTML, CSS, and JavaScript. I have built projects
              such as a Banking Management System and various web
              applications while continuously improving my development
              skills.
            </p>
          )}

          <button
            type="button"
            className="about-btn"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less" : "Show More"}
          </button>

        </div>

      </div>

    </section>
  );
}

export default About;